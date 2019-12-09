import { getBreeds, getRandomBreed } from '../../services/dogs-api';
import {
  GameActionsTypes,
  REQUEST_ALL_BREEDS,
  SUCCESS_ALL_BREEDS,
  FAIL_ALL_BREEDS,
  REQUEST_NEXT_QUESTION,
  SUCCESS_NEXT_QUESTION,
  FAIL_NEXT_QUESTION,
  INIT_CHOOSE,
  RESTART_QUIZ,
} from './types';

const getProbablyAnswers = (breedNames): string[] => {
  const answerCount = Math.min(4, breedNames.length);
  const answers: string[] = [];
  while (answers.length < answerCount) {
    const idx = Math.floor(Math.random() * breedNames.length);
    if (answers.indexOf(breedNames[idx].toLowerCase()) === -1) {
      answers.push(breedNames[idx].toLowerCase());
    }
  }
  return answers;
};

const getAllBreeds = () => (
  async (dispatch: (action: GameActionsTypes) => void) => {
    dispatch({ type: REQUEST_ALL_BREEDS });

    try {
      const breeds = await getBreeds();

      dispatch({
        type: SUCCESS_ALL_BREEDS,
        breeds,
      });
    } catch (err) {
      dispatch({
        type: FAIL_ALL_BREEDS,
        errorMessage: 'Error',
      });
    }
  }
);

const initQuestion = () => (
  async (dispatch: (action: GameActionsTypes) => void, getState) => {
    dispatch({ type: REQUEST_NEXT_QUESTION });
    const { breedNames } = getState().game;
    const choices = getProbablyAnswers(breedNames);
    const correctAnswer = choices[Math.floor(Math.random() * choices.length)];
    const splitAnswer = correctAnswer.split(' ');
    const breed = splitAnswer[splitAnswer.length - 1];
    const sub = splitAnswer.length === 1 ? null : splitAnswer.slice(0, splitAnswer.length - 1).join(' ');

    try {
      const imageUrl = await getRandomBreed(breed, sub);
      dispatch({
        choices,
        correctAnswer,
        imageUrl,
        type: SUCCESS_NEXT_QUESTION,
      });
    } catch (err) {
      dispatch({
        errorMessage: 'Error',
        type: FAIL_NEXT_QUESTION,
      });
    }
  }
);

const initChoose = (choose: string) => ({
  type: INIT_CHOOSE,
  choose,
});

const restartQuiz = () => ({
  type: RESTART_QUIZ,
});

export default {
  getAllBreeds,
  initQuestion,
  initChoose,
  restartQuiz,
};

import {
  GameActionsTypes,
  GameState,
  FAIL_ALL_BREEDS,
  REQUEST_ALL_BREEDS,
  SUCCESS_ALL_BREEDS,
  REQUEST_NEXT_QUESTION,
  SUCCESS_NEXT_QUESTION,
  FAIL_NEXT_QUESTION,
} from './types';

const initialState: GameState = {
  breeds: {},
  error: null,
  breedsLoading: false,
  breedNames: [],
  isResult: false,
  choices: [],
  chosenAnswer: null,
  correctAnswer: null,
  errorMessage: null,
  image: null,
  loading: false,
  isCorrect: null,
  isLegal: false,
};

const gameReducer = (
  state: GameState = initialState,
  action: GameActionsTypes,
) => {
  switch (action.type) {
    case REQUEST_ALL_BREEDS:
      return {
        ...state,
        error: null,
        breedsLoading: true,
      };

    case SUCCESS_ALL_BREEDS: {
      const breedNames: Array<string> = [];
      Object.keys(action.breeds).forEach((breed: string) => {
        if (action.breeds[breed].length === 0) {
          breedNames.push(breed.toLowerCase());
        } else {
          breedNames.push(
            ...action.breeds[breed]
              .map((sub: string) => `${sub.toLowerCase()} ${breed.toLowerCase()}`),
          );
        }
      });
      return {
        ...state,
        breedNames: breedNames.sort(),
        isResult: breedNames.length > 0,
        breeds: action.breeds,
        error: null,
        breedsLoading: false,
        isLegal: true,
      };
    }

    case FAIL_ALL_BREEDS:
      return {
        ...state,
        error: action.errorMessage,
        loading: false,
      };

    case REQUEST_NEXT_QUESTION:
      return {
        ...state,
        choices: [],
        chosenAnswer: null,
        correctAnswer: null,
        errorMessage: null,
        image: null,
        loading: true,
        isCorrect: null,
      };

    case SUCCESS_NEXT_QUESTION:
      return {
        ...state,
        choices: action.choices.sort(),
        correctAnswer: action.correctAnswer,
        errorMessage: null,
        image: action.imageUrl,
        loading: false,
      };

    case FAIL_NEXT_QUESTION:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      };

    default:
      return state;
  }
};

export default gameReducer;

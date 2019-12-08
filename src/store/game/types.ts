export interface GameState {
  breeds: { [breed: string]: Array<string> };
  error: string;
  breedsLoading: boolean;
  isResult: boolean;
  breedNames: Array<string>;
  choices: Array<string>;
  chosenAnswer: string;
  correctAnswer: string;
  errorMessage: string;
  image: string;
  loading: boolean;
  isCorrect: boolean;
  isLegal: boolean;
}

export const REQUEST_ALL_BREEDS = 'REQUEST_ALL_BREEDS';
export const SUCCESS_ALL_BREEDS = 'SUCCESS_ALL_BREEDS';
export const FAIL_ALL_BREEDS = 'FAIL_ALL_BREEDS';
export const REQUEST_NEXT_QUESTION = 'REQUEST_NEXT_QUESTION';
export const SUCCESS_NEXT_QUESTION = 'SUCCESS_NEXT_QUESTION';
export const FAIL_NEXT_QUESTION = 'FAIL_NEXT_QUESTION';

interface RequestAllAction {
  type: typeof REQUEST_ALL_BREEDS;
}

interface SuccessAllAction {
  type: typeof SUCCESS_ALL_BREEDS;
  breeds: { [breed: string]: Array<string> };
}

interface FailureAllAction {
  type: typeof FAIL_ALL_BREEDS;
  errorMessage: string;
}

interface NextQuestionAction {
  type: typeof REQUEST_NEXT_QUESTION;
}

interface NextQuestionSuccessAction {
  type: typeof SUCCESS_NEXT_QUESTION;
  choices: Array<string>;
  correctAnswer: string;
  imageUrl: string;
}

interface NextQuestionFailAction {
  type: typeof FAIL_NEXT_QUESTION;
  errorMessage: string;
}

export type GameActionsTypes = RequestAllAction
| SuccessAllAction
| FailureAllAction
| NextQuestionAction
| NextQuestionSuccessAction
| NextQuestionFailAction;

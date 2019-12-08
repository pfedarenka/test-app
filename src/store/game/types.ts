export interface GameState {
  breeds: { [breed: string]: Array<string> };
  error: string | null;
  breedsLoading: boolean;
  isResult: boolean;
  breedNames: Array<string>;
}

export const REQUEST_ALL_BREEDS = 'REQUEST_ALL_BREEDS';
export const SUCCESS_ALL_BREEDS = 'SUCCESS_ALL_BREEDS';
export const FAIL_ALL_BREEDS = 'FAIL_ALL_BREEDS';

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

export type GameActionsTypes = RequestAllAction | SuccessAllAction | FailureAllAction;

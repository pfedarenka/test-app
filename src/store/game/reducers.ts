import {
  GameState,
  GameActionsTypes,
  REQUEST_ALL_BREEDS,
  SUCCESS_ALL_BREEDS,
  FAIL_ALL_BREEDS,
} from './types';

const initialState: GameState = {
  breeds: {},
  error: null,
  breedsLoading: false,
  breedNames: [],
  isResult: false,
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
            ...action.breeds[breed].map(
              (sub: string) => `${sub.toLowerCase()} ${breed.toLowerCase()}`,
            ),
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
      };
    }

    case FAIL_ALL_BREEDS:
      return {
        ...state,
        error: action.errorMessage,
        loading: false,
      };

    default:
      return state;
  }
};

export default gameReducer;

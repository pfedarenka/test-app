import { getBreeds } from '../../services/dogs-api';
import {
  GameActionsTypes,
  REQUEST_ALL_BREEDS,
  SUCCESS_ALL_BREEDS,
  FAIL_ALL_BREEDS,
} from './types';

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

export default {
  getAllBreeds,
};

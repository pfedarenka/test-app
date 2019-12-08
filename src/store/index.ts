import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import gameReducer from './game/reducers';

const reducers = combineReducers({
  game: gameReducer,
});

export type AppState = ReturnType<typeof reducers>;

const configureStore = () => {
  const middlewares = [thunk];
  return createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
};

const store = configureStore();

export default store;

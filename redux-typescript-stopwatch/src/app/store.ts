// store.ts
import { configureStore, combineReducers, Action, Middleware } from '@reduxjs/toolkit';
import stopwatchReducer from '../features/counter/stopwatchSlice';
import { ThunkAction as ReduxThunkAction } from 'redux-thunk';

const rootReducer = combineReducers({
  stopwatch: stopwatchReducer,
});

export type AppThunk<ReturnType = void> = ReduxThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Define a custom thunk middleware
const thunkMiddleware: Middleware = (api) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(api.dispatch, api.getState);
  }
  return next(action);
};

// Configure store with custom middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;



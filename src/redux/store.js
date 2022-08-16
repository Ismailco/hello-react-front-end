import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting/greeting';

export const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
  middleware: [thunk, logger],
});

import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../slice/quizSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools only in development mode
});

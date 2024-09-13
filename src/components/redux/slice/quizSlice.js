import { createSlice } from '@reduxjs/toolkit';
import { QuizData } from '../../../Data/QuizData';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quizzes: QuizData,
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes.push(action.payload);
    },
  },
});

export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;

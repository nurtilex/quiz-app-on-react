import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    isPlaying: false,
    isAuthenticated: false,
    categories: [],
    cluesCount: 0,
    isQuizVisible: false,
    currentQuiz: null,
    playedQuizIds: [],
  },
  reducers: {
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setAuth(state, action) {
      state.isAuthenticated = action.payload;
    },
    setQuizVisible(state, action) {
      state.isQuizVisible = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCluesCount(state, action) {
      state.cluesCount = action.payload;
    },
    setQuiz(state, action) {
      state.currentQuiz = action.payload;
    },
    addPlayedQuiz(state, action) {
      state.playedQuizIds.push(action.payload);
    },
    initGame() {},
  },
});

export const gameActions = game.actions;

export default game.reducer;

import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    username: '',
    played: 0,
    correct: 0,
    incorrect: 0,
    points: 0,
  },
  reducers: {
    setName(state, action) {
      state.username = action.payload;
    },
    updateStats(state, action) {
      state.played++;
      action.payload.result ? state.correct++ : state.incorrect++;
      action.payload.result
        ? (state.points += action.payload.points)
        : (state.points -= action.payload.points);
    },
  },
});

export const userActions = user.actions;

export default user.reducer;

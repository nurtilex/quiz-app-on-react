export const isPlayingSelector = (state) => state.game.isPlaying;
export const isAuthenticatedSelector = (state) => state.game.isAuthenticated;
export const categoriesSelector = (state) => state.game.categories;
export const cluesCountSelector = (state) => state.game.cluesCount;
export const isQuizVisibleSelector = (state) => state.game.isQuizVisible;
export const currentQuizSelector = (state) => state.game.currentQuiz;
export const playedQuizIdsSelector = (state) => state.game.playedQuizIds;

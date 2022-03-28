import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import user from './slices/userSlice';
import game from './slices/gameSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { user, game },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

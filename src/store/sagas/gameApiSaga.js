import { takeEvery, call, put, all } from 'redux-saga/effects';
import { gameActions } from '../slices/gameSlice';
import { fetchCategories, fetchCategoryById } from '../../services/api';

function* fetchCategoriesGen() {
  try {
    const data = yield call(fetchCategories);
    const idList = data.map((d) => d.id);
    const allCategories = yield all(
      idList.map((id) => {
        return call(fetchCategoryById, id);
      })
    );
    const slicedCategories = allCategories.map((cat) => {
      const copy = { ...cat };
      copy.clues = cat.clues.slice(0, 5);
      copy.clues_count = copy.clues.length;
      return copy
    });
    const cluesCount = slicedCategories.reduce(
      (acc, curr) => (acc += curr.clues_count),
      0
    );
    yield all([
      put(gameActions.setCategories(slicedCategories)),
      put(gameActions.setCluesCount(cluesCount)),
    ]);
  } catch (error) {
    console.log(error.message);
  }
}

function* watchAuthAction() {
  yield takeEvery(gameActions.setAuth.toString(), fetchCategoriesGen);
}

export default watchAuthAction;

import styles from './QuizButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoriesSelector,
  playedQuizIdsSelector,
} from '../../store/selectors';
import { gameActions } from '../../store/slices/gameSlice';

const QuizButton = ({ quiz }) => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const played = useSelector(playedQuizIdsSelector);
  const available = played.includes(quiz.id);
  const handleClick = () => {
    const currentCategory = categories.find(
      (cat) => cat.id === quiz.category_id
    );
    const currentQuiz = currentCategory.clues.find((q) => q.id === quiz.id);
    dispatch(gameActions.setQuiz(currentQuiz));
    dispatch(gameActions.setQuizVisible(true));
  };
  return (
    <button
      className={styles.QuizButton}
      onClick={handleClick}
      disabled={available}
    >
      {quiz.value}
    </button>
  );
};

export default QuizButton;

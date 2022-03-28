import styles from './Category.module.scss';

import CategoryTitle from '../CategoryTitle';
import QuizButton from '../QuizButton';

const Category = ({ data }) => {
  const quizButtons = data.clues.map((clue) => (
    <QuizButton quiz={clue} key={clue.id} />
  ));
  return (
    <div className={styles.Category}>
      <CategoryTitle name={data.title} />
      {quizButtons}
    </div>
  );
};

export default Category;

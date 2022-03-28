import NavBar from '../../components/NavBar';
import { useSelector } from 'react-redux';
import styles from './Stats.module.scss';

const Stats = () => {
  const { points, played, correct, incorrect, username } = useSelector(
    (state) => state.user
  );

  return (
    <div className={styles.Stats}>
      <NavBar />
      <div className={styles.wrapper}>
        <span className={styles.username}>{username}</span>
        <div className={styles.row}>
          <span className={styles.name}>Всего очков</span>
          <span className={styles.value}>{points}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Сыграно</span>
          <span className={styles.value}>{played}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Правильно</span>
          <span className={styles.value}>{correct}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Неправильно</span>
          <span className={styles.value}>{incorrect}</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;

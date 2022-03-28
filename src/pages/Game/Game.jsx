import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../store/slices/gameSlice';
import * as select from '../../store/selectors';

import { Button } from '@mui/material';
import Category from '../../components/Category';
import NavBar from '../../components/NavBar';
import QuizModal from '../../components/QuizModal';
import styles from './Game.module.scss';

const Game = () => {
  const dispatch = useDispatch();

  const isPlaying = useSelector(select.isPlayingSelector);
  const categories = useSelector(select.categoriesSelector);
  const isQuizVisible = useSelector(select.isQuizVisibleSelector);
  const cluesCount = useSelector(select.cluesCountSelector);
  const playedQuizIds = useSelector(select.playedQuizIdsSelector);

  useEffect(() => {
    if (isPlaying && playedQuizIds.length === cluesCount) {
      dispatch(gameActions.setIsPlaying(false));
    }
  }, [playedQuizIds]);

  const handleStartClick = () => {
    dispatch(gameActions.setIsPlaying(true));
  };
  const handleEndClick = () => {
    dispatch(gameActions.setIsPlaying(false));
  };
  const quiz = (
    <>
      <div className={styles.gameWrapper}>
        {categories.map((cat) => (
          <Category data={cat} key={cat.id} />
        ))}
      </div>
      <Button variant="contained" onClick={handleEndClick}>
        Завершить игру
      </Button>
    </>
  );
  const startGameButton = (
    <Button variant="contained" onClick={handleStartClick}>
      Начать игру
    </Button>
  );
  return (
    <div className={styles.Game}>
      <NavBar />
      {isQuizVisible && <QuizModal />}
      {isPlaying && categories.length > 0 ? quiz : startGameButton}
    </div>
  );
};

export default Game;

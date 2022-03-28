import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from '@mui/material';
import styles from './QuizModal.module.scss';
import { gameActions } from '../../store/slices/gameSlice';
import { userActions } from '../../store/slices/userSlice';
import {currentQuizSelector} from '../../store/selectors'

const QuizModal = () => {
  const dispatch = useDispatch();
  
  const { question, answer, value, id } = useSelector(currentQuizSelector);
  const [seconds, setSeconds] = useState(60);
  const [playing, setPlaying] = useState(true);
  const [result, setResult] = useState(false);
  const message = useMemo(
    () => (result ? 'Ответ верный' : 'Ответ неверный'),
    [result]
  );
  let timeout;

  const checkAnswer = (userInput) => answer === userInput;
  const handleCloseButton = () => {
    dispatch(gameActions.setQuizVisible(false));
    dispatch(gameActions.addPlayedQuiz(id))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearTimeout(timeout);
    setPlaying(false);
    setResult(checkAnswer(e.target.userAnswer.value));
  };
  useEffect(() => {
    if (seconds > 0 && playing) {
      timeout = setTimeout(() => setSeconds(seconds - 1), 1000);
      return;
    }
    if (seconds === 0 && playing) {
      clearTimeout(timeout);
      setPlaying(false);
      setResult(false);
    }
    if (playing === false) {
      const payload = {
        result,
        points: value,
      };
      dispatch(userActions.updateStats(payload));
    }
  });

  return (
    <form className={styles.backdrop} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.modal}>
        {playing ? (
          <>
            <div className={styles.question}>{question}</div>
            <div className={styles.timed}>{seconds}</div>
            <Input
              defaultValue={answer}
              id="userAnswer"
              onSubmit={(e) => handleSubmit(e)}
            />
            <Button variant="contained" type="submit">
              Ответить
            </Button>{' '}
          </>
        ) : (
          <>
            <h2 className={result ? styles.correct : styles.incorrect}>
              {message}
            </h2>

            <Button
              variant="contained"
              id="closeQuizButton"
              onClick={handleCloseButton}
            >
              Close
            </Button>
          </>
        )}
      </div>
    </form>
  );
};

export default QuizModal;

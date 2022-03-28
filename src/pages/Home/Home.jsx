import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userActions } from '../../store/slices/userSlice';
import { gameActions } from '../../store/slices/gameSlice';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const isValid = username.trim() !== '';
    if (!isValid) {
      alert('invalid username');
      e.target.username.value = ''
      return;
    }
    dispatch(gameActions.setAuth(true));
    dispatch(userActions.setName(username));
    navigate('../game', { replace: true });
  };
  return (
    <div className={styles.Home}>
      <h1 className={styles.title}>Вход</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          required
          label="Введите ваше имя"
          id="username"
        />
        <Button type="submit" variant="contained">
          Продолжить
        </Button>
      </form>
    </div>
  );
};

export default Home;

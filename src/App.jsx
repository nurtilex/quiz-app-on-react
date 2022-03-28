import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './services/hoc/PrivateRoute';
import Home from './pages/Home';
import Game from './pages/Game';
import Stats from './pages/Stats';

import styles from './assets/commonStyles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route
          path="/game"
          element={<PrivateRoute element={<Game />} />}
          exact
        />
        <Route
          path="/stats"
          element={<PrivateRoute element={<Stats />} />}
          exact
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

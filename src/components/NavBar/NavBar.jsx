import { useLocation, NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const { pathname } = useLocation();
  const getNavStyles = (name) => {
    return pathname === name
      ? `${styles.navLink} ${styles.isActive}`
      : styles.navLink;
  };

  return (
    <header className={styles.NavBar}>
      <div className={styles.logo}>Quiz Game</div>
      <nav className={styles.nav}>
        <NavLink to="/game" className={getNavStyles('/game')}>
          Игра
        </NavLink>
        <NavLink to="/stats" className={getNavStyles('/stats')}>
          Статистика
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;

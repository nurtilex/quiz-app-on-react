import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.game.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/" replace/>;
};

export default PrivateRoute;

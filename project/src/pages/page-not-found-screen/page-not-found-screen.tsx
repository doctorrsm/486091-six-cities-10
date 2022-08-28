import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';

function PageNotFoundScreen(): JSX.Element {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'red',
      textDecoration: 'underline',
    }}
    >
      <p>404 Not Found</p>
      <Link to={AppRoute.Root}>Home page</Link>
    </div>

  );
}

export default PageNotFoundScreen;

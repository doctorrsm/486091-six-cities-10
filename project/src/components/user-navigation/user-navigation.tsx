import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';

type UserNavigationProps = {
  authorizationStatus: AuthorizationStatus;
}

function UserNavigation({authorizationStatus}: UserNavigationProps): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <>
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            <span className="header__favorite-count">3</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to={AppRoute.Favorites} className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <li className="header__nav-item user">
        <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    );
  }
}

export default UserNavigation;

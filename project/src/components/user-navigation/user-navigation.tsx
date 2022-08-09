import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer} from '../../types/offers';


function UserNavigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const {offers, userEmail, authorizationStatus} = useAppSelector((state) => state);
  const favoriteOffers = offers.filter((offer: Offer) => offer.isFavorite);


  const isUserAuth = authorizationStatus === AuthorizationStatus.Auth;
  console.log('isUserAuth', isUserAuth)

  const handleLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">{favoriteOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link to={AppRoute.Login} className="header__nav-link" onClick={handleLogoutClick}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );

}

export default UserNavigation;

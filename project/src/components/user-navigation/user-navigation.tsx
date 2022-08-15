import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer} from '../../types/offers';
import GuestNavigation from '../guest-navigation/guest-navigation';
import {getOffers} from '../../store/offers-data/selectors';
import {getUser} from '../../store/user-process/selectors';


function UserNavigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((offer: Offer) => offer.isFavorite);


  const handleLogoutClick = () => {
    dispatch(logoutAction());
  };

  if (user === null) {
    return (
      <GuestNavigation />
    );
  }

  return (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{ user?.email}</span>
          <span className="header__favorite-count">{favoriteOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link to={AppRoute.Login} className="header__nav-link" onClick={handleLogoutClick}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );

}

export default UserNavigation;

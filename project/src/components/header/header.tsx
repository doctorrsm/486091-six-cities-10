import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import GuestNavigation from '../guest-navigation/guest-navigation';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import React from 'react';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const user = useAppSelector(getUser);
  const isUserAuth = ((authorizationStatus === AuthorizationStatus.Auth) && (user !== null));
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isUserAuth && <UserNavigation />}
              {!isUserAuth && <GuestNavigation />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);

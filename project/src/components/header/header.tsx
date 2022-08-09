import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import GuestNavigation from '../guest-navigation/guest-navigation';

function Header(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth
                ? <UserNavigation />
                : <GuestNavigation />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

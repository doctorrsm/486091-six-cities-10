import {Route, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import {AppRoute} from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import React from 'react';


function App(): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.PageNotFound}
          element={<PageNotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default React.memo(App);

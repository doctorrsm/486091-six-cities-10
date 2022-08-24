import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkAuthAction, fetchFavoriteOffersAction, fetchOffersAction} from './store/api-actions';
import {useAppSelector} from './hooks';
import {getAuthorizationStatus} from './store/user-process/selectors';
import {AuthorizationStatus} from './const';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
//store.dispatch(fetchFavoriteOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={355000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <App />
    </Provider>
  </React.StrictMode>,
);

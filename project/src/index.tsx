import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';

const Setting = {
  PLACES_COUNT: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={Setting.PLACES_COUNT}
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
);

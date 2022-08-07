import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, loadOffers} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  currentCity: 'Paris',
  offers: [],
  currentOffer: [],
  filteredOffers: [],
  reviews: [],
  nearbyOffers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;

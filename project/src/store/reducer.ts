import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity} from './action';

const initialState = {
  currentCity: 'Paris',
  offers: [],
  currentOffer: [],
  reviews: [],
  nearbyOffers: []
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      state.currentCity = action.payload;
    });
});

export default reducer;

import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, loadOffers, requireAuthorization} from './action';
import {Offer, Review} from '../types/offers';
import {AuthorizationStatus, Cities, SortTypes} from '../const';

type InitialStateType = {
  currentCity: string,
  offers: Offer[],
  currentOffer: Offer | null,
  filteredOffers: [],
  reviews: Review[],
  nearbyOffers: [],
  sortType: string,
  authorizationStatus: AuthorizationStatus
};


const initialState: InitialStateType = {
  currentCity: Cities.Paris,
  offers: [],
  currentOffer: null,
  filteredOffers: [],
  reviews: [],
  nearbyOffers: [],
  sortType: SortTypes.Default,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;

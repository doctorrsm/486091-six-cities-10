import {createReducer} from '@reduxjs/toolkit';
import {
  changeCurrentCity,
  loadOffers,
  loadReviews,
  requireAuthorization,
  setDataLoadedStatus,
  setHoveredCard
} from './action';
import {Offer, Review} from '../types/offers';
import {AuthorizationStatus, Cities, SortTypes} from '../const';

type InitialStateType = {
  currentCity: string,
  offers: Offer[],
  currentOffer: Offer | null,
  activeCardId: number;
  filteredOffers: [],
  reviews: Review[],
  nearbyOffers: [],
  sortType: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string | null,
  userEmail: string;
};


const initialState: InitialStateType = {
  currentCity: Cities.Paris,
  offers: [],
  currentOffer: null,
  activeCardId: 0,
  filteredOffers: [],
  reviews: [],
  nearbyOffers: [],
  sortType: SortTypes.Default,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  userEmail: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setHoveredCard, (state, action) => {
      state.activeCardId = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;

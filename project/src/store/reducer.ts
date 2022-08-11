import {createReducer} from '@reduxjs/toolkit';
import {
  changeCurrentCity, loadNearbyOffers, loadOffer,
  loadOffers,
  loadReviews,
  requireAuthorization,
  setDataLoadedStatus,
  setHoveredCard, setOfferLoadedStatus, setUserInfo
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
  nearbyOffers: Offer[],
  sortType: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  isOfferLoaded: boolean,
  error: string | null,
  userEmail: string;
  user?: null | {
    id: number,
    email: string,
    name: string,
    avatarUrl: string,
    isPro: boolean | null,
    token: string,
  }
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
  isOfferLoaded: false,
  error: null,
  userEmail: '',
  user: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
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
    .addCase(setOfferLoadedStatus, (state, action) => {
      state.isOfferLoaded = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.user = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;

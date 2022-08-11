import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offers';

export const changeCurrentCity = createAction('offers/changeCurrentCity', (value) => ({
  payload: value
}));

export const setHoveredCard = createAction('offerList/setHoveredCard', (value) => ({
  payload: value
}));

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadOffers = createAction('offers/loadOffers', (value) => ({
  payload: value
}));
export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');

export const loadReviews = createAction('offers/loadReviews', (value) => ({
  payload: value
}));

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const setOfferLoadedStatus = createAction<boolean>('data/setOfferLoadedStatus');

export const setUserInfo = createAction('data/setUserInfo', (value) => ({
  payload: value
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('login/redirectToRoute');

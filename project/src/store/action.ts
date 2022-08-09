import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCurrentCity = createAction('offers/changeCurrentCity', (value) => ({
  payload: value
}));

export const setHoveredCard = createAction('offerList/setHoveredCard', (value) => ({
  payload: value
}));

export const loadOffers = createAction('offers/loadOffers', (value) => ({
  payload: value
}));

export const loadReviews = createAction('offers/loadReviews', (value) => ({
  payload: value
}));

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('login/redirectToRoute');

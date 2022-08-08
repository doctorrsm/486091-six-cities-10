import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';

export const changeCurrentCity = createAction('offers/changeCurrentCity', (value) => ({
  payload: value
}));

export const loadOffers = createAction('offers/loadOffers', (value) => ({
  payload: value
}));

export const loadReviews = createAction('offers/loadReviews', (value) => ({
  payload: value
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');


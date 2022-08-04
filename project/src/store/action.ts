import {createAction} from '@reduxjs/toolkit';

export const changeCurrentCity = createAction('offers/changeCurrentCity', (value) => ({
  payload: value
}));

export const loadOffers = createAction('offers/loadOffers', (value) => ({
  payload: value
}));

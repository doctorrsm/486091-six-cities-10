import {NameSpace, RequestStatus} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {FavoriteOffers} from '../../types/state';
import {changeFavoriteOfferStatusAction, fetchFavoriteOffersAction, fetchOffersAction} from '../api-actions';
import {store} from '../index';


const initialState: FavoriteOffers = {
  favoriteOffers: [],
  favoriteRequestStatus: RequestStatus.Idle,
  favoriteChangeRequestStatus: RequestStatus.Idle,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteRequestStatus = RequestStatus.Fulfilled;
      })
      .addCase(changeFavoriteOfferStatusAction.pending, (state, action) => {
        state.favoriteChangeRequestStatus = RequestStatus.Pending;
      })
      .addCase(changeFavoriteOfferStatusAction.fulfilled, (state, action) => {
        state.favoriteChangeRequestStatus = RequestStatus.Fulfilled;
      });

  }});

import {NameSpace, RequestStatus} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {OfferData} from '../../types/state';
import {fetchOfferAction} from '../api-actions';

const initialState: OfferData = {
  offerRequestStatus: RequestStatus.Idle,
  currentOffer: null,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerRequestStatus = RequestStatus.Pending;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.offerRequestStatus = RequestStatus.Fulfilled;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerRequestStatus = RequestStatus.Rejected;
      });
  }});

import {OffersData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOffersAction} from '../api-actions';
import {NameSpace, RequestStatus} from '../../const';

const initialState: OffersData = {
  offers: [],
  offersRequestStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersRequestStatus = RequestStatus.Pending;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersRequestStatus = RequestStatus.Fulfilled;
      });
  }
});



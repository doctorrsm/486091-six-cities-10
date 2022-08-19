import {FORM_DATA_INIT_STATE, NameSpace, RequestStatus} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {OfferData} from '../../types/state';
import {fetchOfferAction, sendReviewAction} from '../api-actions';

const initialState: OfferData = {
  offerRequestStatus: RequestStatus.Idle,
  reviewRequestStatus: RequestStatus.Idle,
  currentOffer: null,
  formData: FORM_DATA_INIT_STATE,
  isFormDisabled: false,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeReviewRequestStatus: (state, action) => {
      state.reviewRequestStatus = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
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
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.reviewRequestStatus = RequestStatus.Pending;
        state.isFormDisabled = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviewRequestStatus = RequestStatus.Fulfilled;
        state.isFormDisabled = false;
        state.formData = FORM_DATA_INIT_STATE;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.reviewRequestStatus = RequestStatus.Rejected;
        state.isFormDisabled = false;
      });
  }});

export const {changeReviewRequestStatus, setFormData} = offerData.actions;

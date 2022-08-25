import {NameSpace, RequestStatus} from '../../const';
import {ReviewsData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchReviewsAction, sendReviewAction} from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  reviewRequestStatus: RequestStatus.Idle,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    resetReviewRequestStatus: (state) => {
      state.reviewRequestStatus = RequestStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewRequestStatus = RequestStatus.Fulfilled;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviews = [];
        state.reviewRequestStatus = RequestStatus.Rejected;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.reviewRequestStatus = RequestStatus.Pending;
        state.reviewRequestStatus = RequestStatus.Pending;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        // state.reviews = action.payload;
        state.reviewRequestStatus = RequestStatus.Fulfilled;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.reviewRequestStatus = RequestStatus.Rejected;
      });
  }});

export const {resetReviewRequestStatus} = reviewsData.actions;

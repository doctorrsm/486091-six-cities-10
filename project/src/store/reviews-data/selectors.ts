import {NameSpace, RequestStatus} from '../../const';
import {Review} from '../../types/offers';
import {State} from '../../types/state';

export const getReviews = (state: State): Review[] =>
  state[NameSpace.Reviews].reviews;

export const getReviewSendingStatus = (state: State): RequestStatus =>
  state[NameSpace.Reviews].reviewRequestStatus;

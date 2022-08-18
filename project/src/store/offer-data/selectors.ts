import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offers';

export const getCurrentOffer = (state: State): Offer | null =>
  state[NameSpace.Offer].currentOffer;

export const getOfferRequestStatus = (state: State): RequestStatus =>
  state[NameSpace.Offer].offerRequestStatus;

export const getReviewRequestStatus = (state: State): RequestStatus =>
  state[NameSpace.Offer].reviewRequestStatus;

export const getFormData = (state: State): {
  review: string, rating: number
} =>
  state[NameSpace.Offer].formData;

export const getIsFormDisable = (state: State): boolean =>
  state[NameSpace.Offer].isFormDisabled;

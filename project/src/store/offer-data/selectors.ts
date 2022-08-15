import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offers';

export const getCurrentOffer = (state: State): Offer | null =>
  state[NameSpace.Offer].offer;

export const getOfferRequestStatus = (state: State): RequestStatus =>
  state[NameSpace.Offer].offerRequestStatus;

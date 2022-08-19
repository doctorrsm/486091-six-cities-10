import {NameSpace} from '../../const';
import {Offer} from '../../types/offers';
import {State} from '../../types/state';

export const getOffers = (state: State): Offer[] =>
  state[NameSpace.Offers].offers;

export const getOffersRequestStatus = (state: State): string =>
  state[NameSpace.Offers].offersRequestStatus;


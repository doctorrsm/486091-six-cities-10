import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offer} from '../../types/offers';

export const getFavoriteOffers = (state: State): Offer[] =>
  state[NameSpace.Favorites].favoriteOffers;

export const getFavoriteChangeRequestStatus = (state: State): string =>
  state[NameSpace.Favorites].favoriteChangeRequestStatus;

import {NameSpace} from '../../const';
import {Offer} from '../../types/offers';
import {State} from '../../types/state';

export const getOffersNearby = (state: State): Offer[] =>
  state[NameSpace.NearbyOffers].nearbyOffers;

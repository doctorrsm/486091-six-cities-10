import {store} from '../store';
import {AuthorizationStatus, RequestStatus} from '../const';
import {Offer, Review} from './offers';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: null | {
    id: number,
    email: string,
    name: string,
    avatarUrl: string,
    isPro: boolean | null,
    token: string,
  }
};

export type AppProcess = {
  currentCity: string;
  sortType: string;
  activeCardId: number;
}

export type OfferData = {
  offerRequestStatus: RequestStatus,
  currentOffer: Offer | null,
};

export type OffersData = {
  offers: Offer[],
  offersRequestStatus: RequestStatus,
}

export type OffersNearbyData = {
  nearbyOffers: Offer[]
}

export type ReviewsData = {
  reviews: Review[];
  reviewRequestStatus: RequestStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



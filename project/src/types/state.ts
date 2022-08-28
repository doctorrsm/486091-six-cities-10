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
  currentCity: string,
  sortType: string,
  activeCardId: number,
};

export type FormData = {
  review: string,
  rating: number,
}
export type OfferData = {
  offerRequestStatus: RequestStatus,
  reviewRequestStatus: RequestStatus,
  currentOffer: Offer | null,
  formData: FormData,
  isFormDisabled: boolean,
};

export type OffersData = {
  offers: Offer[] | null,
  offersRequestStatus: RequestStatus,
};

export type OffersNearbyData = {
  nearbyOffers: Offer[],
};

export type ReviewsData = {
  reviews: Review[],
  reviewRequestStatus: RequestStatus,
};

export type FavoriteOffers = {
  favoriteOffers: Offer[],
  favoriteRequestStatus: RequestStatus,
  favoriteChangeRequestStatus: RequestStatus,
};

export type ChangeFavorites = {
  offerId: number,
  isFavorite: number,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



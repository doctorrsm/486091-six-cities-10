import {RequestStatus} from '../../const';
import {createFakeOffer} from '../../tools/mocks';
import {favoriteProcess} from './favorite-process';
import {changeFavoriteOfferStatusAction, fetchFavoriteOffersAction} from '../api-actions';
import {Offer} from '../../types/offers';

const mockFavoriteOffers = [createFakeOffer(), createFakeOffer()];

describe('Reducer: favoriteProcess', () => {

  it('Should return to the initial state', () => {
    expect(favoriteProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        favoriteOffers: [],
        favoriteRequestStatus: RequestStatus.Idle,
        favoriteChangeRequestStatus: RequestStatus.Idle,
      });
  });

  it('Should update update favorite offers', () => {
    const state = {
      favoriteOffers: [],
      favoriteRequestStatus: RequestStatus.Idle,
      favoriteChangeRequestStatus: RequestStatus.Idle,
    };
    expect(favoriteProcess.reducer(state, {type: fetchFavoriteOffersAction.fulfilled.type, payload: mockFavoriteOffers}))
      .toEqual({
        favoriteOffers: mockFavoriteOffers,
        favoriteRequestStatus: RequestStatus.Fulfilled,
        favoriteChangeRequestStatus: RequestStatus.Idle,
      });
  });

  it('Should update the favorite offers status', () => {
    const state = {
      favoriteOffers: [],
      favoriteRequestStatus: RequestStatus.Idle,
      favoriteChangeRequestStatus: RequestStatus.Idle,
    };
    expect(favoriteProcess.reducer(state, {type: changeFavoriteOfferStatusAction.fulfilled.type, payload: {} as Offer}))
      .toEqual({
        favoriteOffers: [] as Offer[],
        favoriteRequestStatus: RequestStatus.Idle,
        favoriteChangeRequestStatus: RequestStatus.Fulfilled,
      });
  });

});

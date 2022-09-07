import {OffersData} from '../../types/state';
import {RequestStatus} from '../../const';
import {fetchOffersAction} from '../api-actions';
import {offersData} from './offers-data';
import {createFakeOffer} from '../../tools/mocks';

const mockOffers = [createFakeOffer(), createFakeOffer()];

describe('Reducer: offers-data', () => {
  let state: OffersData;

  beforeEach(() => {
    state = {
      offers: [],
      offersRequestStatus: RequestStatus.Idle,
    };
  });

  it('should update offersRequestStatus to pending if fetchOffersAction pending', () => {
    expect(offersData.reducer(state, {type: fetchOffersAction.pending.type}))
      .toEqual({
        offers: [],
        offersRequestStatus: RequestStatus.Pending,
      });
  });

  it('should update offers', () => {
    expect(offersData.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: mockOffers}))
      .toEqual({
        offers: mockOffers,
        offersRequestStatus: RequestStatus.Pending,
      });
  });

});

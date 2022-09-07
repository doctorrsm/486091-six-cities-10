import {createFakeOffer} from '../../tools/mocks';
import {changeReviewRequestStatus, offerData, resetCurrentOffer, setFormData} from './offer-data';
import {FORM_DATA_INIT_STATE, RequestStatus} from '../../const';
import {OfferData} from '../../types/state';
import {fetchOfferAction, sendReviewAction} from '../api-actions';

const mockOffer = createFakeOffer();

const mockFormData = {
  review: 'random string',
  rating: 3,
};

describe('Reducer: offer-data', () => {
  let state: OfferData;

  beforeEach(() => {
    state = {
      offerRequestStatus: RequestStatus.Idle,
      reviewRequestStatus: RequestStatus.Idle,
      currentOffer: null,
      formData: FORM_DATA_INIT_STATE,
      isFormDisabled: false,
    };
  });

  it('Should return initial state', () => {
    expect(offerData.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('Should change review requestStatus', () => {
    expect(offerData.reducer(state, changeReviewRequestStatus(RequestStatus.Fulfilled)))
      .toEqual({
        offerRequestStatus: RequestStatus.Idle,
        reviewRequestStatus: RequestStatus.Fulfilled,
        currentOffer: null,
        formData: FORM_DATA_INIT_STATE,
        isFormDisabled: false,
      });
  });

  it('Should set form data', () => {
    expect(offerData.reducer(state, setFormData(mockFormData)))
      .toEqual({
        offerRequestStatus: RequestStatus.Idle,
        reviewRequestStatus: RequestStatus.Idle,
        currentOffer: null,
        formData: mockFormData,
        isFormDisabled: false,
      });
  });

  it('Should change reset current offer', () => {
    expect(offerData.reducer(state, resetCurrentOffer()))
      .toEqual({
        offerRequestStatus: RequestStatus.Idle,
        reviewRequestStatus: RequestStatus.Idle,
        currentOffer: null,
        formData: FORM_DATA_INIT_STATE,
        isFormDisabled: false,
      });
  });

  describe('fetchOfferAction', () => {

    it('should update offerRequestStatus to pending if fetchOfferAction pending', () => {
      expect(offerData.reducer(state, {type: fetchOfferAction.pending.type}))
        .toEqual({
          offerRequestStatus: RequestStatus.Pending,
          reviewRequestStatus: RequestStatus.Idle,
          currentOffer: null,
          formData: FORM_DATA_INIT_STATE,
          isFormDisabled: false,
        });
    });

    it('should update offers', () => {
      expect(offerData.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: mockOffer}))
        .toEqual({
          offerRequestStatus: RequestStatus.Fulfilled,
          reviewRequestStatus: RequestStatus.Idle,
          currentOffer: mockOffer,
          formData: FORM_DATA_INIT_STATE,
          isFormDisabled: false,
        });
    });

    it('should update offerRequestStatus to rejected', () => {
      expect(offerData.reducer(state, {type: fetchOfferAction.rejected.type}))
        .toEqual({
          offerRequestStatus: RequestStatus.Rejected,
          reviewRequestStatus: RequestStatus.Idle,
          currentOffer: null,
          formData: FORM_DATA_INIT_STATE,
          isFormDisabled: false,
        });
    });
  });

  describe('sendReviewAction', () => {

    it('should update reviewRequestStatus to pending if sendReviewAction pending', () => {
      expect(offerData.reducer(state, {type: sendReviewAction.pending.type}))
        .toEqual({
          offerRequestStatus: RequestStatus.Idle,
          reviewRequestStatus: RequestStatus.Pending,
          currentOffer: null,
          formData: FORM_DATA_INIT_STATE,
          isFormDisabled: true,
        });
    });

    it('should update reviewRequestStatus to fulfilled', () => {
      expect(offerData.reducer(state, {type: sendReviewAction.fulfilled.type}))
        .toEqual({
          offerRequestStatus: RequestStatus.Idle,
          reviewRequestStatus: RequestStatus.Fulfilled,
          currentOffer: null,
          formData: FORM_DATA_INIT_STATE,
          isFormDisabled: false,
        });
    });

    it('should update reviewRequestStatus to rejected', () => {
      expect(offerData.reducer(state, {type: sendReviewAction.rejected.type}))
        .toEqual({
          offerRequestStatus: RequestStatus.Idle,
          reviewRequestStatus: RequestStatus.Rejected,
          currentOffer: null,
          formData: FORM_DATA_INIT_STATE,
          isFormDisabled: false,
        });
    });

  });


});


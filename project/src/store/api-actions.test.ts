import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/state';
import { Action } from 'redux';
import {APIRoute} from '../const';
import {
  checkAuthAction,
  fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferAction,
  fetchOffersAction, fetchReviewsAction,
  loginAction,
  logoutAction,
  sendReviewAction
} from './api-actions';
import {AuthData} from '../types/auth-data';
import {createFakeOffer} from '../tools/mocks';
import {ReviewData} from '../types/review-data';
import {redirectToRoute} from './action';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      fetchFavoriteOffersAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret', id: '1', avatarUrl: 'path', email: 'test@test.ru' });


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type,
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('sectretunicauthkey', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      fetchOffersAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('sectretunicauthkey');
  });

  it('should dispatch sendReviewAction when POST /send/comment', async () => {
    const fakeReview: ReviewData = { comment: 'userComment', rating: 1, id: 1 };
    const fakeReply = [
      {
        comment: 'userComment',
        rating: 1,
        id: 1,
        user:
          {
            id: 1,
            name: 'TestName',
            isPro: true,
            avatarUrl: 'testPath'
          }
      }
    ];

    mockAPI
      .onPost(APIRoute.Offers)
      .reply(200, { fakeReply });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(sendReviewAction(fakeReview));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendReviewAction.pending.type,
      sendReviewAction.rejected.type
    ]);
  });

  it('should dispatch fetchOffersAction when GET /offers', async () => {
    const mockOffers = [createFakeOffer()];

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchOfferAction when GET /hotels/:id', async () => {
    const fakeOffer = createFakeOffer();

    mockAPI
      .onGet(`${APIRoute.Offers}/${fakeOffer.id}`)
      .reply(200, fakeOffer);

    const store = mockStore();

    await store.dispatch(fetchOfferAction(fakeOffer.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchNearbyOffersAction when GET "/hotels/:id/nearby"', async () => {
    const mockOffer = createFakeOffer();
    const mockOffersNearby = [createFakeOffer()];

    mockAPI
      .onGet(`${APIRoute.Offers}/${mockOffer.id}/nearby`)
      .reply(200, mockOffersNearby);

    const store = mockStore();

    await store.dispatch(fetchNearbyOffersAction(String(mockOffer.id)));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchNearbyOffersAction.pending.type,
      fetchNearbyOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchReviewsAction when GET /comments/:id', async () => {
    const mockOffer = createFakeOffer();
    const mockReviews = createFakeOffer();

    mockAPI
      .onGet(`${APIRoute.Reviews}/${mockOffer.id}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(String(mockOffer.id)));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchFavoriteOffersAction when GET /favorite', async () => {
    const mockOffers = [createFakeOffer()];

    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchFavoriteOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoriteOffersAction.pending.type,
      fetchFavoriteOffersAction.fulfilled.type
    ]);
  });

});

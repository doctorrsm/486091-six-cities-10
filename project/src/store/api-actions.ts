import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, ChangeFavorites, State} from '../types/state';
import {APIRoute, AppRoute} from '../const';
import {Offer, Review} from '../types/offers';
import {redirectToRoute} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';
import {ReviewData} from '../types/review-data';
import {showApiError} from '../tools/tools';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    }
    catch(err) {
      showApiError('data/fetchOffers', err);
      throw err;
    }
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      return data;
    }
    catch(err) {
      showApiError('data/loadOffer', err);
      throw err;
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      return data;
    }
    catch(err) {
      showApiError('data/fetchNearbyOffers', err);
      throw err;
    }
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
      return data;
    }
    catch(err) {
      showApiError('data/fetchReviews', err);
      throw err;
    }
  }
);

export const sendReviewAction = createAsyncThunk<Review, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/sendReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      const{data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      dispatch(fetchReviewsAction(String(id)));
      return data;
    }
    catch(err) {
      showApiError('data/sendReview', err);
      throw err;
    }
  },
);


export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    dispatch(fetchFavoriteOffersAction());
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    }
    catch(err) {
      showApiError('user/login', err);
      throw err;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(fetchOffersAction());
    }
    catch(err) {
      showApiError('user/logout', err);
      throw err;
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/FavoriteOffersAction',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);
      return data;
    }
    catch(err) {
      showApiError('data/FavoriteOffersAction', err);
      throw err;
    }
  },
);

export const changeFavoriteOfferStatusAction = createAsyncThunk<Offer[], ChangeFavorites, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFavoriteOffersAction',
  async ({offerId, isFavorite}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Offer[]>(`${APIRoute.Favorite}/${offerId}/${isFavorite}`, {offerId, isFavorite});
      dispatch(fetchOffersAction());
      dispatch(fetchFavoriteOffersAction());
      return data;
    }
    catch(err) {
      showApiError('data/changeFavoriteOffersAction', err);
      throw err;
    }

  },
);

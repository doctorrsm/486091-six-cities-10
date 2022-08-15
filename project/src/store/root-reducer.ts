import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {offersData} from './offers-data/offers-data';
import {appProcess} from './app-process/app-process';
import {reviewsData} from './reviews-data/reviews-data';
import {offersNearbyData} from './offers-nearby-data/offers-nearby-data';
import {offerData} from './offer-data/offer-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.NearbyOffers]: offersNearbyData.reducer,
});

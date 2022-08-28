import {Offer, Review} from '../types/offers';
import {SortTypes} from '../const';
import {toast} from 'react-toastify';

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const renderPremiumLabel = (): JSX.Element => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

export const renderRatingWidth = (rating: number): { width: string } => {
  rating = Math.round(rating);
  switch (rating) {
    case 1:
      return {width: '20%'};
    case 2:
      return {width: '40%'};
    case 3:
      return {width: '60%'};
    case 4:
      return {width: '80%'};
    case 5:
      return {width: '100%'};
    default:
      return {width: '0%'};
  }
};

export const sortReviewsByDate = (first:Review, second:Review) => Number(new Date(second.date)) - Number(new Date(first.date));

export const sortOffers = (offers: Offer[], SortType: string) => {
  switch (SortType) {
    case SortTypes.PriceLowToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortTypes.PriceHighToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortTypes.TopRatingFirst:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const getCityNamesFromOffers = (offers: Offer[]) => [...new Set(offers.map((item) => item.city.name))];

export const showApiError = (requestType:string, err: unknown): void => {
  let message = 'Unknown Error';
  if (err instanceof Error) {message = `${requestType} ${err.message} ${err.name} ${err.cause}`;}
  toast.error(message);
};

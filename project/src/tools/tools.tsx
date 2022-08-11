import {Review} from '../types/offers';

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


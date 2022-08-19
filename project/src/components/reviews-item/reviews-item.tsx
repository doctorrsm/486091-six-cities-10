import Rating from '../rating/rating';
import {Review} from '../../types/offers';

type ReviewsItemType = {
  review: Review;
}
function ReviewsItem({review}: ReviewsItemType) {
  const humanDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
  const dateTime = new Date(review.date).toISOString();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            alt="Reviews avatar"
            width={54}
            height={54}
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={review.rating} cardType={'reviews'} />
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>
          {humanDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;

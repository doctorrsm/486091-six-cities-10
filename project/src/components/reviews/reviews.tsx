import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';
import {useAppSelector} from '../../hooks';
import {sortReviewsByDate} from '../../tools/tools';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getReviews} from '../../store/reviews-data/selectors';

function Reviews() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getReviews);

  const sortedReviews = reviews.slice().sort(sortReviewsByDate);
  const MAX_REVIEWS_PER_PAGE = 10;
  const slicedReviews = sortedReviews.slice(0, MAX_REVIEWS_PER_PAGE);
  const reviewsAmount = slicedReviews.length;
  const isHasReviews = reviewsAmount > 0;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsAmount}</span>
      </h2>
      {isHasReviews &&
        <ul className="reviews__list">
          {slicedReviews.map((review) =>
            <ReviewsItem key={review.id} review={review}/>
          )}
        </ul>}
      {authorizationStatus === AuthorizationStatus.Auth &&
        <ReviewsForm />}

    </section>
  );
}

export default Reviews;

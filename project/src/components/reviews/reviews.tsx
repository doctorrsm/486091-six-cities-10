import ReviewsItem from '../reviews-item/reviews-item';
import {Review} from '../../types/offers';
import ReviewsForm from '../reviews-form/reviews-form';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews}: ReviewsProps) {
  const reviewsAmount = reviews.length;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsAmount}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewsItem key={review.id} review={review} />
        )}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default Reviews;

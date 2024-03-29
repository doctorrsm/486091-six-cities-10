import React, {FormEvent} from 'react';
import {sendReviewAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {getFormData, getIsFormDisable, getReviewRequestStatus} from '../../store/offer-data/selectors';
import {setFormData} from '../../store/offer-data/offer-data';
import {RequestStatus, ReviewLength} from '../../const';
import {resetReviewRequestStatus} from '../../store/reviews-data/reviews-data';
import {toast} from 'react-toastify';

function ReviewsForm() {
  const formData = useAppSelector(getFormData);
  const dispatch = useAppDispatch();
  const params = useParams();

  useAppSelector(getReviewRequestStatus);
  const isDisabled = useAppSelector(getIsFormDisable);
  const fieldChangeHandle = async (evt: { target: { name: string; value: string; }; }) => {
    const {name, value} = evt.target;
    dispatch(setFormData({...formData, [name]: value}));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction({ id: Number(params.id), comment: formData.review, rating: formData.rating}))
      .then((data) => {
        const target = evt.target as HTMLFormElement;
        if(data.meta.requestStatus.toUpperCase() === RequestStatus.Fulfilled) {
          target.reset();
          dispatch(resetReviewRequestStatus());
        } else {
          toast.error('Невозможно отправить комментарий, ошибка сервера');
        }
      });
  };


  return (
    <form
      className="reviews__form form"
      action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        onChange={fieldChangeHandle}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled || formData.review.length < ReviewLength.Min || formData.review.length > ReviewLength.Max || !formData.rating}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;

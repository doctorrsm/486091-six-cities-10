import Gallery from '../../components/gallery/gallery';
import Reviews from '../../components/reviews/reviews';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import Rating from '../../components/rating/rating';
import {AppRoute, AuthorizationStatus, cardClassNames, CardTypes, RequestStatus} from '../../const';
import {capitalizeFirstLetter} from '../../tools/tools';
import List from '../../components/list/list';
import PremiumLabel from '../../components/premium-label/premium-label';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  changeFavoriteOfferStatusAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchReviewsAction
} from '../../store/api-actions';
import {useEffect} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import {getOffersNearby} from '../../store/offers-nearby-data/selectors';
import {getCurrentOffer, getOfferRequestStatus} from '../../store/offer-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import {getFavoriteChangeRequestStatus} from '../../store/favorite-process/selectors';
import {resetReviewRequestStatus} from '../../store/reviews-data/reviews-data';
import {resetCurrentOffer} from '../../store/offer-data/offer-data';
import {redirectToRoute} from '../../store/action';
import {changeActiveCardId} from '../../store/app-process/app-process';


function RoomScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getOffersNearby);
  const offerRequestStatus = useAppSelector(getOfferRequestStatus);
  const favoriteChangeRequestStatus = useAppSelector(getFavoriteChangeRequestStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchOfferAction(Number((params.id))));
      dispatch(changeActiveCardId(Number(params.id)));
      dispatch(fetchNearbyOffersAction(String(params.id)));
      dispatch(fetchReviewsAction(String(params.id)));
    }
    return () => {
      isMounted = false;
      dispatch(resetReviewRequestStatus());
      dispatch(resetCurrentOffer());
    };

  }, [dispatch, params.id,]);

  if (offerRequestStatus === RequestStatus.Rejected ) {
    return (
      <PageNotFoundScreen />
    );
  }

  if (offerRequestStatus === RequestStatus.Idle || !offer) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery images={offer.images} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? <PremiumLabel labelType={'property'}/> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button
                  className={`property__bookmark-button button ${offer.isFavorite ? 'property__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    if (authorizationStatus === AuthorizationStatus.NoAuth) {
                      dispatch(redirectToRoute(AppRoute.Login));
                    } else {
                      dispatch(changeFavoriteOfferStatusAction({
                        offerId: offer.id,
                        isFavorite: Number(!offer.isFavorite)
                      }));
                      dispatch(fetchOfferAction(Number((params.id))));
                    }
                  }}
                  disabled={favoriteChangeRequestStatus === RequestStatus.Pending}
                >
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating rating={offer.rating} cardType={cardClassNames.Property}/>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstLetter(offer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&#39;s inside</h2>
                <List list={offer.goods} className={'property__inside-item'} listClassName={'property__inside-list'} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      alt="Host avatar"
                      width={74}
                      height={74}
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  <span className="property__user-status">{offer.host.isPro ? 'Pro' : ''}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              {/*{(authorisationStatus === AuthorizationStatus.Auth) && reviews.length > 0 && <Reviews reviews={reviews}/>}*/}
              {<Reviews />}
            </div>
          </div>
          {nearbyOffers.length > 0 &&
            <Map currentCity={offer.city} points={nearbyOffers.concat(offer)} mapClassName={'property'}/>}
        </section>
        <div className="container">
          {nearbyOffers.length > 0 &&
            <section className="near-places places">
              <h2 className="near-places__title">
              Other places in the neighbourhood
              </h2>
              <PlaceCardList offers={nearbyOffers} cardType={CardTypes.NearPlaces}/>
            </section>}
        </div>
      </main>
    </div>

  );
}

export default RoomScreen;

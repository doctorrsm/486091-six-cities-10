import Gallery from '../../components/gallery/gallery';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Rating from '../../components/rating/rating';
import {cardClassNames, CardTypes} from '../../const';
import {capitalizeFirstLetter} from '../../tools/tools';
import List from '../../components/list/list';
import PremiumLabel from '../../components/premium-label/premium-label';
import Reviews from '../../components/reviews/reviews';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  fetchNearbyOffersAction,
  fetchOfferAction, fetchReviewsAction
} from '../../store/api-actions';
import {useEffect} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';

function RoomScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(Number((params.id))));
    dispatch(fetchNearbyOffersAction(String(params.id)));
    dispatch(fetchReviewsAction(String(params.id)));
  }, [dispatch, params.id]);

  const offer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const isOfferLoaded = useAppSelector((state) => state.isOfferLoaded);

  if (!isOfferLoaded || !offer) {
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
                  className="property__bookmark-button button"
                  type="button"
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
                      A quiet cozy and picturesque that hides behind a a river by
                      the unique lightness of Amsterdam. The building is green and
                      from 18th century.
                  </p>
                  <p className="property__text">
                      An independent House, strategically located between Rembrand
                      Square and National Opera, but where the bustle of the city
                      comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              {reviews.length > 0 && <Reviews reviews={reviews}/>}
            </div>
          </div>
          <Map currentCity={offer.city} points={nearbyOffers}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
                Other places in the neighbourhood
            </h2>
            <PlaceCardList offers={ nearbyOffers} cardType={CardTypes.NearPlaces} />
          </section>
        </div>
      </main>
    </div>

  );
}

export default RoomScreen;

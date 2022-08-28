import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchOffersAction} from '../../store/api-actions';
import {getFavoriteOffers, getFavoriteRequestStatus} from '../../store/favorite-process/selectors';
import {useEffect} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import {RequestStatus} from '../../const';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteRequestStatus = useAppSelector(getFavoriteRequestStatus);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoriteOffers = favoriteOffers.length > 0;

  if(favoriteRequestStatus === RequestStatus.Idle) {
    return <LoadingScreen />;
  }

  return (
    <div className={`page ${isFavoriteOffers || 'favorites--empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${favoriteOffers ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isFavoriteOffers || 'favorites--empty'}`}>
            {isFavoriteOffers && <FavoritesList offers={favoriteOffers}/> }
            {!isFavoriteOffers && <FavoritesEmpty />}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;

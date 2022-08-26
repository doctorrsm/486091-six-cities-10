import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {fetchOffersAction} from '../../store/api-actions';
import {getFavoriteOffers} from '../../store/favorite-process/selectors';

store.dispatch(fetchOffersAction());
// store.dispatch(fetchFavoriteOffersAction());
function FavoritesScreen(): JSX.Element {

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoriteOffers = favoriteOffers.length > 0;
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

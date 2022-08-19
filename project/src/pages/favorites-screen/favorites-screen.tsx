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

  return (
    <div className={`page ${favoriteOffers ? '' : 'favorites--empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${favoriteOffers ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ? <FavoritesList offers={favoriteOffers}/> : <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;

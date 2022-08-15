import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {useAppSelector} from '../../hooks';
import {getOffers} from '../../store/offers-data/selectors';


function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className={`page ${offers ? '' : 'favorites--empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${offers ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ? <FavoritesList offers={favoriteOffers}/> : <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;

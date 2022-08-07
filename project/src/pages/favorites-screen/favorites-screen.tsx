import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {useAppSelector} from '../../hooks';


function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  return (
    <div className={`page ${offers ? '' : 'favorites--empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${offers ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {offers ? <FavoritesList offers={offers}/> : <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;

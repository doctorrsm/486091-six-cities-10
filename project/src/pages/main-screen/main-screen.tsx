import Locations from '../../components/locations/locations';
import Layout from '../../components/layout/layout';
import {PageAttributes, RequestStatus} from '../../const';
import CitiesWithPlaces from '../../components/cities-with-places/cities-with-places';
import CitiesNoPlaces from '../../components/cities-no-places/cities-no-places';
import {useAppSelector} from '../../hooks';
import {getCurrentCity} from '../../store/app-process/selectors';
import {getOffers, getOffersRequestStatus} from '../../store/offers-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen(): JSX.Element {
  const offersRequestStatus = useAppSelector(getOffersRequestStatus);
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);

  if (offersRequestStatus === RequestStatus.Idle || offers === null) {
    return <LoadingScreen />;
  }

  const filteredByNameOffers = offers.filter((offer) => offer.city.name === currentCity);

  return (
    <Layout pageAttributes={PageAttributes.Main}>
      <>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          {filteredByNameOffers.length > 0 ? <CitiesWithPlaces /> : <CitiesNoPlaces />}
        </div>
      </>
    </Layout>
  );
}
export default MainScreen;

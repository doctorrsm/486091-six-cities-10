import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers';

type Props = {
  offers: Offer[]
};

function NearPlacesList({offers}: Props): JSX.Element{
  return(
    <>
      <PlaceCard offer={offers[1]} isActive={false} cardType={'near-places'} />
      <PlaceCard offer={offers[2]} isActive={false} cardType={'near-places'} />
      <PlaceCard offer={offers[3]} isActive={false} cardType={'near-places'} />
    </>
  );
}

export default NearPlacesList;

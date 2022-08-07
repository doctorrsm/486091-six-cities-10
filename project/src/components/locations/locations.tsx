import {useAppDispatch, useAppSelector} from '../../hooks';
import {Cities} from '../../const';
import {changeCurrentCity} from '../../store/action';

function Locations(): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {Cities.map((city) => {
          const isActive = city.name === currentCity;
          return(
            <li key={city.name} className='locations__item'>
              <a
                className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
                onClick={() => dispatch(changeCurrentCity(city.name))}
              >{city.name}
              </a>
            </li>
          );
        })}


      </ul>
    </section>
  );
}

export default Locations;

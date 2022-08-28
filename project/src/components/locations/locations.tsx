import {useAppDispatch, useAppSelector} from '../../hooks';
import {CityList} from '../../const';
import {getCurrentCity} from '../../store/app-process/selectors';
import {changeCurrentCity} from '../../store/app-process/app-process';
import {Link} from 'react-router-dom';

function Locations(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {CityList.map((cityName) => {
          const isActive = cityName === currentCity;
          return(
            <li key={cityName} className='locations__item'>
              <Link to='#'
                className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
                onClick={() => dispatch(changeCurrentCity(cityName))}
              >{cityName}
              </Link>
            </li>
          );
        })}


      </ul>
    </section>
  );
}

export default Locations;

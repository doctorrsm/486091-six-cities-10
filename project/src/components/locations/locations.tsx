import {useAppDispatch, useAppSelector} from '../../hooks';
import {Cities, cityList} from '../../const';
import {changeCurrentCity} from '../../store/action';

function Locations(): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {cityList.map((cityName) => {
          const isActive = cityName === currentCity;
          return(
            <li key={cityName} className='locations__item'>
              <a
                className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
                onClick={() => dispatch(changeCurrentCity(cityName))}
              >{cityName}
              </a>
            </li>
          );
        })}


      </ul>
    </section>
  );
}

export default Locations;

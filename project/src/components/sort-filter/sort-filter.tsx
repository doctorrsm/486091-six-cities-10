import {useState} from 'react';
import {SortTypes} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getSortType} from '../../store/app-process/selectors';
import {changeSort} from '../../store/app-process/app-process';

function SortFilter():JSX.Element {
  const dispatch = useAppDispatch();
  const selectedSortValue = useAppSelector(getSortType);

  const [isOpen, changeOpenStatus] = useState(false);
  const handleToggleFormClick = () => {
    changeOpenStatus(!isOpen);
  };

  const handleFilterClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLElement;
    changeOpenStatus(!isOpen);

    dispatch(changeSort(target.textContent as SortTypes));
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleFormClick}>
        {selectedSortValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref={'#icon-arrow-select'}></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        <li className={`places__option ${SortTypes.Default === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{SortTypes.Default}</li>
        <li className={`places__option ${SortTypes.PriceHighToLow === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{SortTypes.PriceHighToLow}</li>
        <li className={`places__option ${SortTypes.PriceLowToHigh === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{SortTypes.PriceLowToHigh}</li>
        <li className={`places__option ${SortTypes.TopRatingFirst === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{SortTypes.TopRatingFirst}</li>
      </ul>
    </form>
  );
}

export default SortFilter;

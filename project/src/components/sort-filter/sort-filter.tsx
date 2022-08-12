import {useState} from 'react';
import {SortTypes} from '../../const';

type Props = {
  setSelectedSortValue: (value: SortTypes) => void,
  selectedSortValue: SortTypes,
}

function SortFilter({setSelectedSortValue, selectedSortValue}: Props):JSX.Element {
  const [isOpen, changeOpenStatus] = useState(false);
  const handleToggleFormClick = () => {
    changeOpenStatus(!isOpen);
  };

  const handleFilterClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLElement;
    changeOpenStatus(!isOpen);

    setSelectedSortValue(target.textContent as SortTypes);
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleFormClick}>
                                      Popular
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
  )
}

export default SortFilter;

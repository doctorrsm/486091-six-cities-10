import {useState} from 'react';

function SortFilter():JSX.Element {
  const [isOpen, changeOpenStatus] = useState(false);
  const handleToggleFormClick = () => {
    changeOpenStatus(!isOpen);
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
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  )
}

export default SortFilter;

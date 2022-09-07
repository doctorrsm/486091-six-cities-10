import {ProjectCities, SortTypes} from '../../const';
import {appProcess, changeActiveCardId, changeCurrentCity, changeSort} from './app-process';

describe('Reducer: appProcess', () => {
  it('Should return to the initial state', () => {
    expect(appProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        currentCity: ProjectCities.Paris,
        sortType: SortTypes.Default,
        activeCardId: 0,
      });
  });

  it('Should update the current city and reset the sorting type', () => {
    const state = {
      currentCity: ProjectCities.Paris,
      sortType: SortTypes.TopRatingFirst,
      activeCardId: 0,
    };
    expect(appProcess.reducer(state, changeCurrentCity(ProjectCities.Hamburg)))
      .toEqual({
        currentCity: ProjectCities.Hamburg,
        sortType: SortTypes.Default,
        activeCardId: 0,
      });
  });

  it('Should change the sort type', () => {
    const state = {
      currentCity: ProjectCities.Paris,
      sortType: SortTypes.Default,
      activeCardId: 0,
    };
    expect(appProcess.reducer(state, changeSort(SortTypes.PriceHighToLow)))
      .toEqual({
        currentCity: ProjectCities.Paris,
        sortType: SortTypes.PriceHighToLow,
        activeCardId: 0,
      });
  });

  it('Should update the id of the active card', () => {
    const state = {
      currentCity: ProjectCities.Paris,
      sortType: SortTypes.Default,
      activeCardId: 0,
    };
    expect(appProcess.reducer(state, changeActiveCardId(10)))
      .toEqual({
        currentCity: ProjectCities.Paris,
        sortType: SortTypes.Default,
        activeCardId: 10,
      });
  });

});

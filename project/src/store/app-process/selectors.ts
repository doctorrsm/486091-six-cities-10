import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getCurrentCity = (state: State): string =>
  state[NameSpace.App].currentCity;

export const getSortType = (state: State): string =>
  state[NameSpace.App].sortType;

export const getActiveCardId = (state: State): number =>
  state[NameSpace.App].activeCardId;

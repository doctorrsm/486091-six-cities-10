import {Cities, NameSpace, SortTypes} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  currentCity: Cities.Paris,
  sortType: SortTypes.Default,
  activeCardId: 0,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCurrentCity: (state, action) => {
      state.currentCity = action.payload;
      state.sortType = SortTypes.Default;
    },
    changeSort: (state, action) => {
      state.sortType = action.payload;
    },
    changeActiveCardId: (state, action) => {
      state.activeCardId = action.payload;
    }
  },
});

export const {changeCurrentCity, changeSort, changeActiveCardId} = appProcess.actions;

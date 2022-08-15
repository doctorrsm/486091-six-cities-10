import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;


export const getUser = (state: State): {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  isPro: boolean | null,
  token: string,
} | null =>
  state[NameSpace.User].user;

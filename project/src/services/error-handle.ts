import request from 'axios';
import {AppRoute, HTTP_CODE} from '../const';
import {redirectToRoute} from '../store/action';
import {toast} from 'react-toastify';
import {store} from '../store';

export const errorHandle = (error: unknown) => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.warn(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.warn(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.PageNotFound));
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.warn(response.data.error);
        break;
    }
  } else {
    toast.error('Internet connection is offline');
  }
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_ACTIVE = 'img/pin-active.svg';

export enum AppRoute {
  Favorites = '/favorites',
  Room = '/offer/:id',
  PageNotFound = '*',
  Root = '/',
  Login = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum CityNames {
  FirstCity = 'Paris',
  SecondCity = 'Cologne',
  ThirdCity = 'Brussels',
  FourthCity = 'Amsterdam',
  FifthCity = 'Hamburg',
  SixthCity = 'Dusseldorf'
}

export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

export const cityList = Object.keys(Cities);

export enum CardTypes {
  Cities = 'cities',
  Favorites = 'favorites',
  NearPlaces = 'near-places'
}

export enum cardClassNames {
  PlaceCard = 'place-card',
  Property = 'property'
}

export const PageAttributes = {
  Main: {
    'Title': 'Cities',
    'MainClassName': 'page__main page__main--index',
    'BodyClassName': 'page page--gray page--main',
  },
  Room: {
    'Title': '6 cities',
    'MainClassName': 'page__main page__main--property',
    'BodyClassName': 'page',
  },
  Favorites: {
    'Title': 'Saved listing',
    'MainClassName': 'page__main page__main--favorites',
    'BodyClassName': 'page',
  },
  Login: {
    'Title': 'Sign in',
    'MainClassName': 'page__main page__main--login',
    'BodyClassName': 'page page--gray page--login',
  }
} as const;

export const SortTypes = {
  Default: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatingFirst: 'Top rated first'
} as const;

export const APIRoute = {
  Offers: '/hotels',
  Login: '/login',
  Logout: '/logout',
  Reviews: '/comments',
} as const;


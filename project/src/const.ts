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

export enum CityNames {
  FirstCity = 'Paris',
  SecondCity = 'Cologne',
  ThirdCity = 'Brussels',
  FourthCity = 'Amsterdam',
  FifthCity = 'Hamburg',
  SixthCity = 'Dusseldorf'
}

export const Cities = [{name: 'Paris'}, {name: 'Cologne'}, {name: 'Brussels'}, {name: 'Amsterdam'}, {name: 'Hamburg'}, {name: 'Dusseldorf'}];

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

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

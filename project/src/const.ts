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

export const ProjectCities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

export const CityList = Object.keys(ProjectCities);

export enum CardTypes {
  Cities = 'cities',
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

export enum SortTypes {
  Default = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatingFirst ='Top rated first'
}

export const APIRoute = {
  Offers: '/hotels',
  Login: '/login',
  Logout: '/logout',
  Reviews: '/comments',
  Favorite: '/favorite'
} as const;

export const FORM_DATA_INIT_STATE = {
  review: '',
  rating: 0,
};

export enum NameSpace {
  Offer = 'OFFER',
  Offers = 'OFFERS',
  NearbyOffers = 'NEARBY_OFFERS',
  Reviews = 'REVIEWS',
  User = 'USER',
  App = 'APP',
  Favorites = 'FAVORITES',
}

export const enum RequestStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export const TileLayerConfig = {
  imageUrl: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

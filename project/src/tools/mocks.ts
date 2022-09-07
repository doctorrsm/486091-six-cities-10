import {image, name, datatype, address, random, internet} from 'faker';
import {Offer, Review} from '../types/offers';


export const createFakeOffer = (): Offer => ({
  bedrooms: datatype.number(10),
  city: {
    location: {
      latitude: Number(address.latitude(180, -180, 4)),
      longitude: Number(address.longitude(180, -180, 4)),
      zoom: datatype.number(15)
    },
    name: address.cityName(),
  },
  description: random.words(10),
  goods:  ['first goods', 'second goods'],
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(100),
    isPro: datatype.boolean(),
    name: name.firstName(),
  },
  id: datatype.number(),
  images: [
    image.city(),
    image.city(),
    image.city(),
  ],
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude(180, -180, 4)),
    longitude: Number(address.longitude(180, -180, 4)),
    zoom: datatype.number(15)
  },
  maxAdults: datatype.number(10),
  previewImage: image.city(),
  price: datatype.number(5000 ),
  rating: datatype.float({min: 0.1, max: 5, precision: 0.1}),
  title: datatype.string(),
  type: datatype.string(),
});

export const createFakeReview = (): Review[] => ([{
  comment: datatype.string(),
  date: String(datatype.datetime()),
  id: datatype.number(),
  rating: datatype.number(),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
}]);

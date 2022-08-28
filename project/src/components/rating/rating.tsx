import {renderRatingWidth} from '../../tools/tools';

type Props = {
  rating: number;
  cardType: string;
}

function Rating({rating, cardType}: Props): JSX.Element {
  return (
    <div className={`${cardType}__rating rating`}>
      <div className={`${cardType}__stars rating__stars`}>
        <span style={renderRatingWidth(rating)}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;

import Rating from '../Rating/Rating';
import './ReviewsList.scss';
import Count from '../Count/Count';

function ReviewsList(props) {
	const reviews = props.reviews;
	const listItems = reviews.map((review) =>
			(review.active) ? (
				<div key={review.id} className={`reviews-list__item ${review.mod}`}>
					<div className="reviews-list__titlebox">
						<img alt="Err" src={review.img} />
						<p className="reviews-list__name">{review.name}</p>
						<p className="reviews-list__date">{review.date}</p>
						
						<Rating rating={review.rating} />
					</div>
					<div className="reviews-list__contentbox">
						<p>{review.text}</p>
					</div>
				</div>
			) : 
				''
	);
	return (
		<div className="l-container">
			<h1>Отзывы</h1>
			<div className="b-reviews-list">{listItems}</div>
			<Count />
		</div>
	);
}

export default ReviewsList;
import Rating from '../Rating/Rating';
import './ReviewsList.scss';

function ReviewsList(props) {
	const reviews = props.reviews;
	const listItems = reviews.map((review) =>
		<div>
			{(review.active) ? (
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
			}
		</div>
	);
	return (
		<div className="l-container">
			<h1>Отзывы</h1>
			<div className="b-reviews-list">{listItems}</div>
		</div>
	);
}

export default ReviewsList;
import './Rating.scss';

function Rating(props) {
	const rating = props.rating;
	switch(rating) {
		case 1 : return (
			<div className="b-ratingbox">
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
			</div>
		);
		case 2 : return (
			<div className="b-ratingbox">
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
			</div>
		);
		case 3 : return (
			<div className="b-ratingbox">
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
			</div>
		);
		case 4 : return (
			<div className="b-ratingbox">
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star"></div>
			</div>
		);
		case 5 : return (
			<div className="b-ratingbox">
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
				<div className="ratingbox__star ratingbox__star--active"></div>
			</div>
		);
		default : return (
			<div className="b-ratingbox">
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
				<div className="ratingbox__star"></div>
			</div>
		)
	}
}

export default Rating;
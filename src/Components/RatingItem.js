import React from "react";
import classes from "./RatingItem.module.css";

const star = "images/icon-star.svg";

function RatingItem(props) {
	return (
		<li className={classes.ratingItem}>
			<div className={classes.stars}>
				<img className={classes.ratingImage} src={star} alt="star" />
				<img className={classes.ratingImage} src={star} alt="star" />
				<img className={classes.ratingImage} src={star} alt="star" />
				<img className={classes.ratingImage} src={star} alt="star" />
				<img className={classes.ratingImage} src={star} alt="star" />
			</div>
			<p className={classes.ratingText}>{props.text}</p>
		</li>
	);
}

export default RatingItem;

import React from "react";
import classes from "./RatingItem.module.css";
import star from "../images/icon-star.svg";

function RatingItem(props) {
	return (
		<li>
			<div className={classes.stars}>
				<img src={star} alt="star" />
				<img src={star} alt="star" />
				<img src={star} alt="star" />
				<img src={star} alt="star" />
				<img src={star} alt="star" />
			</div>
			<p>{props.text}</p>
		</li>
	);
}

export default RatingItem;

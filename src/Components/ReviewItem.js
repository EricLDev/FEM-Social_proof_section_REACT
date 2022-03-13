import React from "react";
import classes from "./ReviewItem.module.css";

function ReviewItem(props) {
	return (
		<li className={classes.reviewItem} id={props.id}>
			<div className={classes.reviewHeader}>
				<img src={props.image} alt="img" />
				<div>
					<p>{props.name}</p>
					<p>{props.title}</p>
				</div>
			</div>
			<p>{props.text}</p>
		</li>
	);
}

export default ReviewItem;

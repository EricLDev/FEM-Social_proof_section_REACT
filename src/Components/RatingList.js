import React from "react";
import classes from "./RatingList.module.css";
import RatingItem from "./RatingItem.js";

const ratings = [
	{
		id: 1,
		text: "Rated 5 Stars in Reviews",
	},
	{
		id: 2,
		text: "Rated 5 Stars in Report Guru",
	},
	{
		id: 3,
		text: "Rated 5 Stars in BestTech",
	},
];

function RatingList() {
	return (
		<ul className={classes.ratingList}>
			{ratings.map((rating) => (
				<RatingItem key={rating.id} id={rating.id} text={rating.text} />
			))}
		</ul>
	);
}

export default RatingList;

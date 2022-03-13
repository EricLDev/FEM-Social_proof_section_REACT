import React from "react";
import classes from "./ReviewsList.module.css";
import ReviewItem from "./ReviewItem";

const reviews = [
	{
		id: "1",
		image: "images/image-colton.jpg",
		name: "Colton Smith",
		title: "Verified Buyer",
		text: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
	},
	{
		id: 2,
		image: "images/image-irene.jpg",
		name: "Irene Roberts",
		title: "Verified Buyer",
		text: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
	},
	{
		id: 3,
		image: "images/image-anne.jpg",
		name: "Anne Wallace",
		title: "Verified Buyer",
		text: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
	},
];

function ReviewsList() {
	return (
		<ul className={classes.reviewsList}>
			{reviews.map((review) => (
				<ReviewItem key={review.id} id={review.id} image={review.image} name={review.name} title={review.title} text={review.text} />
			))}
		</ul>
	);
}

export default ReviewsList;

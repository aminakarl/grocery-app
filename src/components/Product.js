import React from 'react';
import './Product.scss';

const Product = props => {
	const {index, product} = props;

	const plus = () => {
		props.onVote('plus', index);
	};
	const minus = () => {
		props.onVote('minus', index);
	};

	return (
		<li className="product">
			<span>{product.name}</span> - <span>votes: {product.votes}</span>
			<button onClick={plus}>+</button>{" "}
			<button onClick={minus}>-</button>
		</li>
	);
};

export default Product;

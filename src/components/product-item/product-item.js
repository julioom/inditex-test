import React from "react";
import "./product-item.scss";
import { Link } from "react-router-dom";

const ProductItem = ({ brand, imgUrl, link, model, price }) => {
	return (
		<div className="product">
			<Link to={link}>
				<img src={imgUrl} className="product__image" />
				<div className="product__brand">
					{brand} - {model}
				</div>
				{price && <div className="product__price">{price} €</div>}
			</Link>
		</div>
	);
};

export default ProductItem;

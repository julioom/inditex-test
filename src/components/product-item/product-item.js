import React from "react";
import "./product-item.scss";

const ProductItem = ({ brand, imgUrl, model, price }) => {
	console.log(imgUrl);
	return (
		<div className="product">
			<img src={imgUrl} className="product__image" />
			<div className="product__brand">
				{brand} - {model}
			</div>
			{price && <div className="product__price">{price} €</div>}
		</div>
	);
};

export default ProductItem;

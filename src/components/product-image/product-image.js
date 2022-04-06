import React from "react";
import "./product-image.scss";

const ProductImage = ({ image }) => {
	return (
		<div className="product-image">
			<img src={image} />
		</div>
	);
};

export default ProductImage;

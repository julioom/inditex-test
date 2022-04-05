import React from "react";

const ProductDetail = ({ match }) => {
	console.log("id");
	console.log(match.params.id);
	return <div>Product Detail</div>;
};

export default ProductDetail;

import React from "react";
import "./product-description.scss";

const propsToDisplay = [
	"brand",
	"model",
	"price",
	"cpu",
	"ram",
	"os",
	"battery",
	"primaryCamera",
	"secondaryCmera",
	"displayResolution",
	"displaySize",
	"displayType",
	"dimentions",
	"weight",
];

const ProductDescription = (props) => {
	const renderElement = (prop) => {
		let res = "";
		if (propsToDisplay.includes(prop)) {
			const value = props[prop];
			if (value === "object") {
				res = value.reduce(
					(acc, curr, index) => (index === 0 ? curr : acc + " - " + curr),
					""
				);
			} else if (!value) {
				return null;
			} else {
				res = value;
			}

			return (
				<li key={res} className="list-element">
					{prop}: {res}
				</li>
			);
		}
		return null;
	};
	return (
		<div className="product-description">
			<span className="title">DESCRIPCIÓN</span>
			<ul>
				{Object.keys(props)
					.map((prop) => renderElement(prop))
					.filter(Boolean)}
			</ul>
		</div>
	);
};

export default ProductDescription;

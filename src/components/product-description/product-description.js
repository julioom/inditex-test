import React from "react";
import "./product-description.scss";

const ProductDescription = ({
	brand,
	model,
	price,
	cpu,
	ram,
	os,
	battery,
	primaryCamera,
	secondaryCmera,
	displayResolution,
	displaySize,
	displayType,
	dimentions,
	weight,
}) => {
	const elements = [
		brand,
		model,
		price,
		cpu,
		ram,
		os,
		battery,
		primaryCamera,
		secondaryCmera,
		displayResolution,
		displaySize,
		displayType,
		dimentions,
		weight,
	];

	const renderElement = (e) => {
		let res = "";
		if (typeof e === "object") {
			res = e.reduce(
				(acc, curr, index) => (index === 0 ? curr : acc + " - " + curr),
				""
			);
		} else {
			res = e;
		}
		return (
			<li key={res} className="list-element">
				{res}
			</li>
		);
	};
	return (
		<div className="product-description">
			<span className="title">DESCRIPTION</span>
			<ul>{elements.map((e) => renderElement(e))}</ul>
		</div>
	);
};

export default ProductDescription;

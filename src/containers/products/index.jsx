import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import Search from "../../components/search/search";
import "./products.scss";
import ProductItem from "../../components/product-item/product-item";

const Products = () => {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filterText, setFilterText] = useState("");
	const products = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.getProductsRequest());
	}, []);

	const onChangeFilter = (text) => {
		console.log("text");
		console.log(text);
		setFilterText(text);
		//filtrar por marca y modelo
	};
	return (
		<div className="products-container">
			<div className="products-container__header">
				<span>PRODUCTS</span>
				<Search onChange={onChangeFilter} value={filterText} />
			</div>
			<div className="products-container__body">
				<div className="products-container__body-content">
					{products.map((p) => (
						<ProductItem key={p.id} {...p} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;

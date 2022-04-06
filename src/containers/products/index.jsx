import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import Search from "../../components/search/search";
import "./products.scss";
import ProductItem from "../../components/product-item/product-item";
import useFilter from "../../hooks/useFilter";

const Products = () => {
	const products = useSelector((state) => state.products.products);
	const { onFilter } = useFilter(products);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filterText, setFilterText] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		if (!products || !products.length) {
			dispatch(actions.getProductsRequest());
		}
	}, []);

	useEffect(() => {
		setFilteredProducts(products);
	}, [products]);

	const onChangeFilter = (text) => {
		setFilterText(text);
		const filteredProducts = onFilter(text);
		setFilteredProducts(filteredProducts);
	};

	return (
		<div className="products-container">
			<div className="products-container__header">
				<span className="title">PRODUCTOS</span>
				<Search onChange={onChangeFilter} value={filterText} />
			</div>
			<div className="products-container__body">
				{filteredProducts.length ? (
					<div className="products-container__body-content">
						{filteredProducts.map((p) => (
							<ProductItem key={p.id} {...p} link={`/products/${p.id}`} />
						))}
					</div>
				) : (
					<div className="no-products">NO HAY PRODUCTOS ACTUALMENTE</div>
				)}
			</div>
		</div>
	);
};

export default Products;

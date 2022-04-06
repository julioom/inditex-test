import React, { useState, useEffect } from "react";
import "./product-detail.scss";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import ProductImage from "../../components/product-image/product-image";
import ProductDescription from "../../components/product-description/product-description";
import ProductActions from "../../components/product-actions/product-actions";

const ProductDetail = ({ match }) => {
	const [color, setColor] = useState("");
	const [memory, setMemory] = useState("");
	const dispatch = useDispatch();
	const product = useSelector((state) => state.products.productDetail);

	useEffect(() => {
		dispatch(actions.getProductDetailRequest(match.params.id));
	}, []);

	useEffect(() => {
		const defaultColorValue =
			product?.options?.colors?.length === 1
				? product.options.colors[0].code
				: "";

		const defaultMemoryValue =
			product?.options?.storages?.length === 1
				? product.options.storages[0].code
				: "";

		setColor(defaultColorValue);
		setMemory(defaultMemoryValue);
	}, [product]);

	const onChangeColor = (value) => {
		setColor(value);
	};
	const onChangeMemory = (value) => {
		setMemory(value);
	};
	const onAddToCart = () => {
		if (product.id && color && memory) {
			dispatch(actions.addProductToCartRequest(product.id, color, memory));
		} else {
			alert("Debes seleccionar un color y un almacenamiento");
		}
	};
	return (
		<div className="product-detail">
			<ProductImage image={product.imgUrl} />
			<div>
				<ProductDescription {...product} />
				<ProductActions
					options={product.options}
					defaultColorValue={color}
					defaultMemoryValue={memory}
					onChangeColor={onChangeColor}
					onChangeMemory={onChangeMemory}
					onAddToCart={onAddToCart}
				/>
			</div>
		</div>
	);
};

export default ProductDetail;

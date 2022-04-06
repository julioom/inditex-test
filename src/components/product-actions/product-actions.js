import React from "react";
import "./product-actions.scss";
import ProductAction from "../product-action/product-action";

const ProductActions = ({
	options,
	defaultColorValue,
	defaultMemoryValue,

	onChangeColor,
	onChangeMemory,
	onAddToCart,
}) => {
	return (
		<div className="product-actions">
			{options ? (
				<>
					<span className="title">ACCIONES</span>
					<div className="selectors">
						<ProductAction
							title="Color"
							value={defaultColorValue}
							onChange={onChangeColor}
							options={options.colors}
						/>
						<ProductAction
							title="Almacenamiento"
							value={defaultMemoryValue}
							onChange={onChangeMemory}
							options={options.storages}
						/>
					</div>
					<div>
						<button className="add-cart" onClick={onAddToCart}>
							Añadir al carrito
						</button>
					</div>
				</>
			) : (
				<div className="loading">Cargando...</div>
			)}
		</div>
	);
};

export default ProductActions;

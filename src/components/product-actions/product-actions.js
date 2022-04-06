import React from "react";
import "./product-actions.scss";

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
					<span className="title">ACTIONS</span>
					<div className="selectors">
						<div>
							Color:{" "}
							<select
								value={defaultColorValue}
								onChange={(e) => onChangeColor(e.target.value)}
							>
								<option value=""></option>
								{options.colors.map((c) => (
									<option
										key={c.code}
										value={c.code}
										selected={defaultColorValue === c.code}
									>
										{c.name}
									</option>
								))}
							</select>{" "}
						</div>
						<div>
							Almacenamiento:{" "}
							<select
								value={defaultMemoryValue}
								onChange={(e) => onChangeMemory(e.target.value)}
							>
								<option value=""></option>
								{options.storages.map((c) => (
									<option
										key={c.code}
										value={c.code}
										selected={defaultMemoryValue === c.code}
									>
										{c.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<button className="add-cart" onClick={onAddToCart}>
								Añadir al carrito
							</button>
						</div>
					</div>
				</>
			) : (
				<div className="loading">Cargando...</div>
			)}
		</div>
	);
};

export default ProductActions;

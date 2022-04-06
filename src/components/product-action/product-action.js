import React from "react";

const ProductAction = ({ title, value, onChange, options }) => {
	return (
		<div>
			{title}:{" "}
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				data-testid={`select-${title}`}
			>
				<option value=""></option>
				{options.map((c) => (
					<option
						key={c.code}
						value={c.code}
						selected={value === c.code}
						data-testid={`option-${title}`}
					>
						{c.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default ProductAction;

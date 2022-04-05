const useFilter = (products) => {
	const onFilter = (text) => {
		let filteredProducts = products;
		if (text) {
			filteredProducts = products.filter(
				(p) =>
					p.brand.toLowerCase().includes(text) ||
					p.model.toLowerCase().includes(text)
			);
		}
		return filteredProducts;
	};

	return { onFilter };
};

export default useFilter;

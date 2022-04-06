// In this hook, we can add whatever config or check that we want
const useFilter = (products) => {
	const onFilter = (text) => {
		let filteredProducts = products || [];
		if (text) {
			filteredProducts = products.filter(
				(p) =>
					p.brand.toLowerCase().includes(text) ||
					p.model.toLowerCase().includes(text) ||
					(p.brand.toLowerCase() + " - " + p.model.toLowerCase()).includes(
						text
					) ||
					(p.brand.toLowerCase() + " " + p.model.toLowerCase()).includes(text)
			);
		}
		return filteredProducts;
	};

	return { onFilter };
};

export default useFilter;

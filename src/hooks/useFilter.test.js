import { renderHook, act } from "@testing-library/react-hooks";
import useFilter from "./useFilter";

const products = [
	{ brand: "acer", model: "model 1" },
	{ brand: "lenovo", model: "model 3" },
];
describe("useFilter", () => {
	it("Should filter by a text", () => {
		const pe = products.filter((p) => p.brand);
		const { result } = renderHook(useFilter, {
			initialProps: products,
		});
		const filteredProducts = result.current.onFilter("acer");
		expect(filteredProducts).toHaveLength(1);
		expect(filteredProducts).toEqual([{ brand: "acer", model: "model 1" }]);
	});
});

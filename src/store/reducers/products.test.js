import reducer from "./products";
import * as actionTypes from "../actions/actionTypes";

const products = [
	{ brand: "acer", model: "ab" },
	{ brand: "acer 3", model: "bk" },
];

describe("products reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			products: [],
			productDetail: {},
			loading: false,
		});
	});

	it("should store all the products", () => {
		expect(
			reducer(
				{
					products: [],
					productDetail: {},
					loading: false,
				},
				{
					type: actionTypes.GET_PRODUCTS_SUCCESS,
					products: products,
				}
			)
		).toEqual({
			products: products,
			productDetail: {},
			loading: false,
		});
	});
});

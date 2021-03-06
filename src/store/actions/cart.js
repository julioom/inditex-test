import * as actionTypes from "./actionTypes";

export const addProductToCartRequest = (id, colorCode, storageCode) => {
	return {
		type: actionTypes.ADD_PRODUCT_TO_CART_REQUEST,
		id,
		colorCode,
		storageCode,
	};
};
export const addProductToCartSuccess = (count) => {
	// get expiration time: 1h
	return {
		type: actionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
		count,
	};
};

export const addProductToCartFail = (error) => {
	return {
		type: actionTypes.ADD_PRODUCT_TO_CART_FAIL,
		error: error,
	};
};

export const removeProductsFromCart = () => {
	return {
		type: actionTypes.REMOVE_PRODUCTS_FROM_CART,
	};
};

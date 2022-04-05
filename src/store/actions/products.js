import * as actionTypes from "./actionTypes";

export const getProductsRequest = () => {
	return {
		type: actionTypes.GET_PRODUCTS_REQUEST,
	};
};

export const getProductsSuccess = (products) => {
	return {
		type: actionTypes.GET_PRODUCTS_SUCCESS,
		products,
	};
};

export const getProductsFail = (error) => {
	return {
		type: actionTypes.GET_PRODUCTS_FAIL,
		error: error,
	};
};

export const getProductDetailRequest = () => {
	return {
		type: actionTypes.GET_PRODUCT_DETAIL_REQUEST,
	};
};

export const getProductDetailSuccess = (productDetail) => {
	// get expiration time: 1h
	return {
		type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
		productDetail,
	};
};

export const getProductDetailFail = (error) => {
	return {
		type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
		error: error,
	};
};

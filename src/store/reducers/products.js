import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
	products: [],
	productDetail: {},
	expirationTime: null,
	loading: false,
};

const getProductsRequest = (state, action) => {
	return updateObject(state, { products: [], loading: true });
};
const getProductsSuccess = (state, action) => {
	return updateObject(state, { products: action.products, loading: false });
};
const getProductsFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		products: [],
		loading: false,
	});
};
const getProductDetailRequest = (state, action) => {
	return updateObject(state, { productDetail: {}, loading: true });
};
const getProductDetailSuccess = (state, action) => {
	return updateObject(state, {
		productDetail: action.productDetail,
		loading: false,
	});
};
const getProductDetailFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		productDetail: {},
		loading: false,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_REQUEST:
			return getProductsRequest(state, action);
		case actionTypes.GET_PRODUCTS_SUCCESS:
			return getProductsSuccess(state, action);
		case actionTypes.GET_PRODUCTS_FAIL:
			return getProductsFail(state, action);
		case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
			return getProductDetailRequest(state, action);
		case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
			return getProductDetailSuccess(state, action);
		case actionTypes.GET_PRODUCT_DETAIL_FAIL:
			return getProductDetailFail(state, action);
		default:
			return state;
	}
};

export default reducer;

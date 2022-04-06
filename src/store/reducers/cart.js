import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
	count: 0,
};

const addProductToCartSuccess = (state, action) => {
	return updateObject(state, { count: action.count });
};

const addProductToCartFail = (state) => {
	return state;
};

const removeProductsFromCart = (state) => {
	return updateObject(state, { count: 0 });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
			return addProductToCartSuccess(state, action);
		case actionTypes.ADD_PRODUCT_TO_CART_FAIL:
			return addProductToCartFail(state);
		case actionTypes.REMOVE_PRODUCTS_FROM_CART:
			return removeProductsFromCart(state);
		default:
			return state;
	}
};

export default reducer;

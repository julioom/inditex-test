import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { getProductsSaga, getProductDetailSaga } from "./products";

import { addProductToCartSaga } from "./cart";

export function* watchProducts() {
	yield all([
		takeEvery(actionTypes.GET_PRODUCTS_REQUEST, getProductsSaga),
		takeEvery(actionTypes.GET_PRODUCT_DETAIL_REQUEST, getProductDetailSaga),
	]);
}

export function* watchCart() {
	yield takeLatest(
		actionTypes.ADD_PRODUCT_TO_CART_REQUEST,
		addProductToCartSaga
	);
}

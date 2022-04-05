import { put } from "redux-saga/effects";
import axios from "../../axios";

import * as actions from "../actions/index";

/* export function* checkAuthTimeoutSaga(action) {
	yield delay(action.expirationTime * 1000);
	yield put(actions.logout());
} */
export function* getProductsSaga(action) {
	try {
		const response = yield axios.get("/api/product");

		yield put(actions.getProductsSuccess(response.data));
	} catch (error) {
		yield put(actions.getProductsFail(error));
	}
}

export function* getProductDetailSaga(action) {
	try {
		const response = yield axios.get("/api/product/" + action.productId);

		yield put(actions.getProductDetailSuccess(response.data));
	} catch (error) {
		yield put(actions.getProductDetailFail(error));
	}
}

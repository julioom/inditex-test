import { put, delay } from "redux-saga/effects";
import axios from "../../axios";

import * as actions from "../actions/index";

export function* getProductsSaga(action) {
	try {
		const response = yield axios.get("/api/product");

		yield put(actions.getProductsSuccess(response.data));
		yield delay(60 * 60 * 1000);
		yield put(actions.getProductsRequest());
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

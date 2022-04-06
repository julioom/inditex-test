import { put, delay } from "redux-saga/effects";
import axios from "../../axios";

import * as actions from "../actions/index";

export function* addProductToCartSaga(action) {
	try {
		const response = yield axios.post("/api/cart", {
			id: action.id,
			colorCode: action.colorCode,
			storageCode: action.storageCode,
		});

		yield put(actions.addProductToCartSuccess(response.data.count));
		yield delay(60 * 60 * 1000);
		yield put(actions.removeProductsFromCart());
	} catch (error) {
		yield put(actions.addProductToCartFail(error));
	}
}

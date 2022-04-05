import { put } from "redux-saga/effects";
import axios from "../../axios";

import * as actions from "../actions/index";

export function* addProductToCartSaga(action) {
	try {
		const response = yield axios.post("/api/cart", {
			id: action.id,
			colorCode: action.colorCode,
			storageCode: action.storageCode,
		});

		yield put(actions.addProductToCartSuccess(response.count));
	} catch (error) {
		yield put(actions.addProductToCartFail(error));
	}
}

import { put, call, takeLatest, all, fork, take } from "redux-saga/effects";
import { fetchTodoList } from "../../api/fetchTodo.api";
import { actApiFail, actApiSuccess } from "../actions";
import { EActionTypes } from "../interfaces/actions.interfaces";

export default function* root() {
    yield all([fork(rootSaga)]);
}

function* rootSaga() {
    yield takeLatest(EActionTypes.API_REQUEST, fetchTodoData);
}

function* fetchTodoData() {
    try {
        const data: todoItem[] = yield call(fetchTodoList);

        yield put(actApiSuccess(data));
    } catch (error) {
        yield put(actApiFail(error));
        return;
    } finally {
    }
}

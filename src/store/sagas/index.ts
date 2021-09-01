import { put, call, takeLatest, all, fork, take } from "redux-saga/effects";
import { fetchTodoList } from "../../api/fetchTodo.api";
import { todoItem } from "../../types/Todo.types";
import { actApiFail, actApiSuccess } from "../actions";
import { EActionTypes } from "../interfaces/actions.interfaces";

export default function* root() {
    yield all([fork(rootSaga)]);
}

// API_REQUEST 액션을 모니터링하고 해당 액션 발생 시 fetchTodoData 실행
function* rootSaga() {
    yield takeLatest(EActionTypes.API_REQUEST, fetchTodoData);
}

// fetchTodoList가 완료되면 API_SUCCESS 액션을 발생시키고, 에러 발생시 API_FAIL 액션을 발생시킨다.
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

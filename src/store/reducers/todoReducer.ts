import { EActionTypes, IActions } from "../interfaces/actions.interfaces";
import { IApiResult } from "../interfaces/reducers.interfaces";

const initialState = {
    count: 0,
    todoList: [],
    error: null,
};

export default function todoReducer(state = initialState, action: IActions) {
    switch (action.type) {
        case EActionTypes.API_SUCCESS:
            return {
                ...state,
                ...{ todoList: action.data },
            };
        case EActionTypes.API_FAIL:
            return {
                ...state,
                ...{ error: action.error },
            };
        case EActionTypes.API_INIT:
            return {
                ...state,
                ...{
                    error: initialState.error,
                    todoList: initialState.todoList,
                    count: initialState.todoList.length ?? 0,
                },
            };
        default:
            return state;
    }
}

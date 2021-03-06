import { todoItem } from "../../types/Todo.types";
import { EActionTypes, IActions } from "../interfaces/actions.interfaces";

const initialState = {
    count: 0,
    todoList: [],
    error: null,
};

//Reducer 생성
export default function todoReducer(state = initialState, action: IActions) {
    switch (action.type) {
        case EActionTypes.API_SUCCESS:
            return {
                ...state,
                ...{ todoList: action.data, count: action.data.length ?? 0 },
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
        case EActionTypes.EDIT:
            return {
                ...state,
                ...{ todoList: action.data, count: action.data.length ?? 0 },
            };
        case EActionTypes.DELETE:
            return {
                ...state,
                ...{
                    todoList: state.todoList.filter(
                        (item: todoItem) => parseInt(item.id) !== action.id
                    ),
                },
            };
        default:
            return state;
    }
}

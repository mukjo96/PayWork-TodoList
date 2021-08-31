import {
    EActionTypes,
    IActions,
} from "../interfaces/iApiExample/actions.interfaces";

const initialState = {
    count: 2,
    todoList: [
        {
            id: "string",
            content: "string",
            isCheck: true,
            createdAt: "2021-05-26T11:51:05.097Z",
        },
        {
            id: "string",
            content: "string",
            isCheck: false,
            createdAt: "2021-05-26T16:15:25.729Z",
        },
    ],
    error: null,
};

export default function testReducer(state = initialState, action: IActions) {
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

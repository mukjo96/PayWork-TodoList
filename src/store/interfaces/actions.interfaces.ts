import { todoItem } from "../../types/Todo.types";

export enum EActionTypes {
    API_INIT = "API_INIT",
    API_REQUEST = "API_REQUEST",
    API_SUCCESS = "API_SUCCESS",
    API_FAIL = "API_FAIL",
    EDIT = "EDIT",
    DELETE = "DELETE",
}

export type IActions =
    | IActApiInit
    | IActApiRequest
    | IActApiSuccess
    | IActApiFail
    | IActEdit
    | IActDelete;

export interface IActApiInit {
    type: EActionTypes.API_INIT;
}

export interface IActApiRequest {
    type: EActionTypes.API_REQUEST;
}

export interface IActApiSuccess {
    type: EActionTypes.API_SUCCESS;
    data: todoItem[];
}

export interface IActApiFail {
    type: EActionTypes.API_FAIL;
    error: Error;
}

export interface IActEdit {
    type: EActionTypes.EDIT;
    data: todoItem[];
}

export interface IActDelete {
    type: EActionTypes.DELETE;
    id: number;
}

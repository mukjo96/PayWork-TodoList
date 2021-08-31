import { IApiResult } from "./reducers.interfaces";

export enum EActionTypes {
    API_INIT = "API_INIT",
    API_REQUEST = "API_REQUEST",
    API_SUCCESS = "API_SUCCESS",
    API_FAIL = "API_FAIL",
}

export type IActions =
    | IActApiInit
    | IActApiRequest
    | IActApiSuccess
    | IActApiFail;

export interface IActApiInit {
    type: EActionTypes.API_INIT;
}

export interface IActApiRequest {
    type: EActionTypes.API_REQUEST;
}

export interface IActApiSuccess {
    type: EActionTypes.API_SUCCESS;
    data: IApiResult;
}

export interface IActApiFail {
    type: EActionTypes.API_FAIL;
    error: Error;
}

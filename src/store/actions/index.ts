import {
    EActionTypes,
    IActApiFail,
    IActApiInit,
    IActApiRequest,
    IActApiSuccess,
} from "../interfaces/iApiExample/Actions.interfaces";
import { IApiResult } from "../interfaces/iApiExample/reducers.interfaces";

export function actApiInit(): IActApiInit {
    return {
        type: EActionTypes.API_INIT,
    };
}

export function actApiRequest(): IActApiRequest {
    return {
        type: EActionTypes.API_REQUEST,
    };
}

export function actApiSuccess(data: IApiResult): IActApiSuccess {
    return {
        type: EActionTypes.API_SUCCESS,
        data,
    };
}

export function actApiFail(error: Error): IActApiFail {
    return {
        type: EActionTypes.API_FAIL,
        error,
    };
}

export interface IApiResult {
    count: number;
    todoList: todoItem[];
    error: string | null;
}

export interface IApiExampleState {
    apiResult: IApiResult | null;
    error: null | Error;
}

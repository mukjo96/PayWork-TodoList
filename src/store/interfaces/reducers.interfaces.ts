import { todoItem } from "../../types/Todo.types";

export interface IApiResult {
    count: number;
    todoList: todoItem[];
    error: string | null;
}

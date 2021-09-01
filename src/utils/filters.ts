import moment from "moment";
import { todoItem } from "../types/Todo.types";

export const todayTaskFilter = (list: todoItem[]) =>
    list
        .filter((item) =>
            item.goalDate ? moment(item.goalDate).isAfter(new Date()) : false
        )
        .filter((item) => moment(item.goalDate).isSame(new Date(), "day"));
export const laterTaskFilter = (list: todoItem[]) =>
    list
        .filter((item) =>
            item.goalDate ? moment(item.goalDate).isAfter(new Date()) : true
        )
        .filter((item) => !moment(item.goalDate).isSame(new Date(), "day"));
export const overDueFilter = (list: todoItem[]) =>
    list.filter((item) =>
        item.goalDate ? !moment(item.goalDate).isAfter(new Date()) : false
    );

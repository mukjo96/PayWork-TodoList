import { PRIORITY } from "../constants/constants";

export type todoItem = {
    id: string;
    content: string;
    isCheck: boolean;
    goalDate: Date | null;
    priority: priorityType;
    createdAt: Date;
};

export type priorityType =
    | typeof PRIORITY.URGENT
    | typeof PRIORITY.RUNNING
    | typeof PRIORITY.ONGOING;

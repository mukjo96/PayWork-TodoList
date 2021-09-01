import axios from "axios";
import { priorityType } from "../types/Todo.types";

// axios 인스턴스 생성
const TodoClient = axios.create({
    baseURL: "https://paywork-todo-json.herokuapp.com",
    headers: {
        Accept: "application/json",
        useQueryString: "true",
        "Content-Type": "application/json",
    },
});

//GET 메소드 이용하여 api 호출
export async function fetchTodoList() {
    try {
        let response = await TodoClient.get("/todoList");
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

//POST 메소드 이용하여 데이터 추가 요청
export async function addTodo(
    content: string,
    priority: priorityType,
    date?: Date
) {
    try {
        await TodoClient.post("/todoList", {
            content: content,
            isCheck: false,
            goalDate: date ?? null,
            createdAt: Date(),
            priority: priority,
        });
    } catch (e) {
        console.log(e);
    }
}

//PATCH 메소드 이용하여 특정 id 데이터 수정 요청
export async function editTodo(
    id: number,
    content: string,
    priority: priorityType,
    date?: Date
) {
    try {
        await TodoClient.patch(
            `/todoList/${id}`,
            date
                ? {
                      content: content,
                      goalDate: date,
                      priority: priority,
                  }
                : { content: content, priority: priority }
        );
    } catch (e) {
        console.log(e);
    }
}

//PATCH 메소드 이용하여 특정 ID isCheck 속성 수정
export async function toggleCheckTodo(id: number, isCheck: boolean) {
    try {
        await TodoClient.patch(`/todoList/${id}`, {
            isCheck: isCheck,
        });
    } catch (e) {
        console.log(e);
    }
}

//DELETE 메소드 이용하여 특정 ID 제거
export async function deleteTodo(id: number) {
    try {
        await TodoClient.delete(`/todoList/${id}`);
    } catch (e) {
        console.log(e);
    }
}

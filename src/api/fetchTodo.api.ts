import axios from "axios";

const TodoClient = axios.create({
    baseURL: "https://paywork-todo-json.herokuapp.com",
    timeout: 5000,
    headers: {
        Accept: "application/json",
        useQueryString: "true",
        "Content-Type": "application/json",
    },
});

export async function fetchTodoList() {
    try {
        let response = await TodoClient.get("/todoList");
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function addTodo(content: string) {
    try {
        await TodoClient.post("/todoList", {
            content: content,
            isCheck: false,
            createdAt: Date(),
        });
    } catch (e) {
        console.log(e);
    }
}

export async function editTodo(id: number, content: string) {
    try {
        await TodoClient.patch(`/todoList/${id}`, {
            content: content,
        });
    } catch (e) {
        console.log(e);
    }
}

export async function deleteTodo(id: number) {
    try {
        await TodoClient.delete(`/todoList/${id}`);
    } catch (e) {
        console.log(e);
    }
}

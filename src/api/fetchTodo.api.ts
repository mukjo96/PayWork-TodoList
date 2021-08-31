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

export async function editTodoList(id: number, content: string) {
    try {
        let response = await TodoClient.patch(`/todoList/${id}`, {
            content: content,
        });
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

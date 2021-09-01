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
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

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

export async function toggleCheckTodo(id: number, isCheck: boolean) {
    try {
        await TodoClient.patch(`/todoList/${id}`, {
            isCheck: isCheck,
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

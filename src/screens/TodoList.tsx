import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { editTodoList, fetchTodoList } from "../api/fetchTodo.api";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setTodoList(await fetchTodoList());
            setIsLoading(false);
        })();
        // editTodoList(1, "수정 완료");
    }, []);

    if (isLoading) return <View></View>;
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={todoList}
                renderItem={({ item }) => <TodoItem todo={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    flatList: {
        padding: 10,
    },
});

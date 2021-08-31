import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodoList } from "../api/fetchTodo.api";
import TodoItem from "../components/TodoItem";
import { actApiInit, actApiRequest } from "../store/actions";

const TodoList = (props: any) => {
    const dispatch = useDispatch();
    const todoList = useSelector((state: any) => state.todoReducer.todoList);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredList, setFilteredList] = useState<todoItem[]>([]);
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            dispatch(actApiInit());
            dispatch(actApiRequest());
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (todoList) {
            const newList =
                props.route.name === "TaskList"
                    ? todoList.filter((item: todoItem) => !item.isCheck)
                    : todoList.filter((item: todoItem) => item.isCheck);
            setFilteredList([...newList]);
        }
    }, [todoList]);

    async function handleTodoDelete(id: number) {
        await deleteTodo(id);
        dispatch(actApiRequest());
    }

    const renderHiddenItem = (data: any) => {
        return (
            <View style={styles.rowBack}>
                <Text></Text>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => handleTodoDelete(data.item.id)}
                >
                    <Text style={styles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    };

    if (isLoading)
        return (
            <View>
                <Text>Loading..</Text>
            </View>
        );
    return (
        <View style={styles.container}>
            <SwipeListView
                style={styles.flatList}
                data={filteredList}
                renderItem={({ item }) => <TodoItem todo={item} />}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={0}
                rightOpenValue={-75}
                keyExtractor={(item: todoItem) => item.id}
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

    backTextWhite: {
        color: "#FFF",
    },
    rowBack: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        marginBottom: 12,
    },
    backRightBtn: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: "red",
        borderRadius: 5,
        right: 0,
    },
});

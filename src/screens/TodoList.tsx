import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodoList } from "../api/fetchTodo.api";
import { FeatherIcon, IonIcon } from "../components/Icons/Icon";
import TodoItem from "../components/TodoItem";
import { actApiInit, actApiRequest } from "../store/actions";
import { todoItem } from "../types/Todo.types";

const TodoList = (props: any) => {
    const dispatch = useDispatch();
    const todoList = useSelector((state: any) => state.todoReducer.todoList);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredList, setFilteredList] = useState<todoItem[]>([]);
    const navigation = useNavigation();

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
                    ? todoList.filter((item: todoItem) =>
                          item.goalDate
                              ? moment(item.goalDate).isAfter(new Date())
                              : true
                      )
                    : todoList.filter((item: todoItem) =>
                          item.goalDate
                              ? !moment(item.goalDate).isAfter(new Date())
                              : false
                      );
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
                <TouchableOpacity
                    style={styles.backLeftBtn}
                    onPress={() => navigation.navigate("EditModal", data.item)}
                >
                    <FeatherIcon name="edit" size={24} color="#8280FF" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.backRightBtn}
                    onPress={() => handleTodoDelete(data.item.id)}
                >
                    <IonIcon name="trash-sharp" size={24} color="#FF7285" />
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
                leftOpenValue={75}
                rightOpenValue={-75}
                keyExtractor={(item: todoItem) => item.id.toString()}
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
    rowBack: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        height: "80%",
        marginBottom: 14,
    },
    backRightBtn: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75,
        borderRadius: 5,
        right: 0,
    },
    backLeftBtn: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75,
        borderRadius: 5,
        left: 0,
    },
});

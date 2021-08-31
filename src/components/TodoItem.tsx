import moment from "moment";
import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch } from "react-redux";
import { toggleCheckTodo } from "../api/fetchTodo.api";
import { actApiRequest, actEdit } from "../store/actions";
import { FeatherIcon } from "./Icons/Icon";

const TodoItem = ({ todo }: { todo: todoItem }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    toggleCheckTodo(parseInt(todo.id), !todo.isCheck);
                    dispatch(actApiRequest());
                }}
            >
                {todo.isCheck ? (
                    <FeatherIcon size={24} name="check-circle" color="black" />
                ) : (
                    <FeatherIcon size={24} name="circle" color="black" />
                )}
            </TouchableOpacity>
            <View style={styles.contents}>
                <Text style={styles.title}>{todo.content}</Text>
                <Text style={styles.goalDate}>
                    {todo.goalDate ? moment(todo.goalDate).fromNow() : ""}
                </Text>
            </View>
        </View>
    );
};
export default TodoItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        shadowColor: "#8280FF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 5,
        padding: 10,
        width: Dimensions.get("screen").width * 0.9,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 12,
    },
    contents: {
        marginLeft: 10,
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
    },

    goalDate: {
        fontSize: 12,
        color: "#555",
    },
});

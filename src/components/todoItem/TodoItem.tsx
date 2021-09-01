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
import { toggleCheckTodo } from "../../api/fetchTodo.api";
import { actApiRequest } from "../../store/actions";
import { todoItem } from "../../types/Todo.types";
import { FeatherIcon } from "../Icons/Icon";

//개별 todoItem 컴포넌트
const TodoItem = ({ todo }: { todo: todoItem }) => {
    const dispatch = useDispatch();

    return (
        <View
            style={{
                ...styles.container,
                shadowColor: todo.isCheck ? "#555555" : "#8280FF",
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => {
                        toggleCheckTodo(parseInt(todo.id), !todo.isCheck);
                        dispatch(actApiRequest());
                    }}
                >
                    {todo.isCheck ? (
                        <FeatherIcon
                            size={24}
                            name="check-circle"
                            color="black"
                        />
                    ) : (
                        <FeatherIcon size={24} name="circle" color="black" />
                    )}
                </TouchableOpacity>
                <View style={styles.contents}>
                    <Text
                        style={{
                            ...styles.title,
                            color: todo.isCheck ? "#555555" : "black",
                        }}
                    >
                        {todo.content}
                    </Text>
                    <Text style={styles.goalDate}>
                        {todo.goalDate ? moment(todo.goalDate).fromNow() : ""}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    ...styles.priorityIndicator,
                    backgroundColor:
                        todo.priority === 1
                            ? "#4AD991"
                            : todo.priority === 2
                            ? "#FFCA83"
                            : "#FF7285",
                }}
            ></View>
        </View>
    );
};
export default TodoItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 5,
        padding: 15,
        width: Dimensions.get("screen").width * 0.9,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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

    priorityIndicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
});

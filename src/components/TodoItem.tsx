import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const TodoItem = ({ todo }: { todo: todoItem }) => {
    return (
        <View style={styles.container}>
            {todo.isCheck ? (
                <Feather size={24} name="check-circle" />
            ) : (
                <Feather size={24} name="circle" />
            )}
            <View style={styles.contents}>
                <Text>{todo.content}</Text>
                <Text>{todo.createdAt}</Text>
            </View>
        </View>
    );
};
export default TodoItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7f7f7",
        shadowColor: "#000",
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
});

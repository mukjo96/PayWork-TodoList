import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
} from "react-native";
import { addTodo } from "../api/fetchTodo.api";

const AddTaskModal = () => {
    const [text, onChangeText] = useState("Useless Text");
    const [number, onChangeNumber] = useState<string>("");

    const handleSubmit = () => {
        addTodo(text);
    };

    return (
        <SafeAreaView>
            <Text></Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                onSubmitEditing={() => addTodo(text)}
            />
            {/* <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
            /> */}
            <TouchableHighlight onPress={() => addTodo(text)}>
                <Text>Press this button to submit editing</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddTaskModal;

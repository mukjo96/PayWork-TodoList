import React, { useState } from "react";

import { addTodo } from "../api/fetchTodo.api";

import "moment/locale/ko";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { actApiRequest } from "../store/actions";
import InputForm from "../components/form/inputForm";

const AddTaskModal = () => {
    const [text, onChangeText] = useState<string>("");
    const [date, setDate] = useState<Date>(new Date());
    const [isOnDate, setIsOnDate] = useState(true);
    const [priority, setPriority] = useState<priorityType>(1);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (text) {
            isOnDate ? addTodo(text, priority, date) : addTodo(text, priority);
            dispatch(actApiRequest());
            navigation.goBack();
        }
    };

    return (
        <InputForm
            text={text}
            onChangeText={onChangeText}
            date={date}
            setDate={setDate}
            isOnDate={isOnDate}
            setIsOnDate={setIsOnDate}
            priority={priority}
            setPriority={setPriority}
            handleSubmit={handleSubmit}
        />
    );
};

export default AddTaskModal;

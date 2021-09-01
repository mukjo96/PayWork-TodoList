import React, { useState } from "react";

import { addTodo, editTodo } from "../api/fetchTodo.api";

import "moment/locale/ko";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { actApiRequest } from "../store/actions";
import InputForm from "../components/form/inputForm";
import { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { priorityType, todoItem } from "../types/Todo.types";

type RootStackParamList = {
    EditModal: todoItem;
};

type Props = NativeStackScreenProps<RootStackParamList, "EditModal">;

const EditTaskModal = ({ route, navigation }: Props) => {
    const [text, onChangeText] = useState<string>(route.params.content);
    const [date, setDate] = useState<Date>(
        route.params.goalDate ? new Date(route.params.goalDate) : new Date()
    );
    const [isOnDate, setIsOnDate] = useState(
        route.params.goalDate ? true : false
    );
    const [priority, setPriority] = useState<priorityType>(
        route.params.priority
    );
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (text) {
            (async () => {
                isOnDate
                    ? await editTodo(
                          parseInt(route.params.id),
                          text,
                          priority,
                          date
                      )
                    : await editTodo(parseInt(route.params.id), text, priority);
                dispatch(actApiRequest());
                navigation.goBack();
            })();
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

export default EditTaskModal;

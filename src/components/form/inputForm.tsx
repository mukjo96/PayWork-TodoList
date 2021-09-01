import React, { Dispatch } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";
import DatePicker from "react-native-date-picker";

import moment from "moment";
import { IonIcon } from "../Icons/Icon";
import { priorityType } from "../../types/Todo.types";

interface formProps {
    text: string;
    onChangeText: Dispatch<React.SetStateAction<string>>;
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    isOnDate: boolean;
    setIsOnDate: React.Dispatch<React.SetStateAction<boolean>>;
    priority: priorityType;
    setPriority: React.Dispatch<React.SetStateAction<priorityType>>;
    handleSubmit: () => void;
}

const InputForm = ({
    text,
    onChangeText,
    date,
    setDate,
    isOnDate,
    setIsOnDate,
    priority,
    setPriority,
    handleSubmit,
}: formProps) => {
    const toggleDateSwitch = () => setIsOnDate((prevState) => !prevState);
    const handlePriorityButton = (priority: priorityType) => {
        setPriority(priority);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="What do you need to do?"
                    placeholderTextColor="#555"
                />
                <View style={styles.subTitleContainer}>
                    <View style={styles.menuInfo}>
                        <IonIcon name="ios-alarm" size={20} color="#B4B4C6" />
                        <Text
                            style={{
                                ...styles.dateText,
                                color: isOnDate ? "black" : "#B4B4C6",
                            }}
                        >
                            {moment(date).format("lll")}
                        </Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#B4B4C6", true: "#4AD991" }}
                        thumbColor={isOnDate ? "#fff" : "#fff"}
                        ios_backgroundColor="#B4B4C6"
                        onValueChange={toggleDateSwitch}
                        value={isOnDate}
                        style={styles.switch}
                    />
                </View>
                <DatePicker
                    date={isOnDate ? date : new Date()}
                    onDateChange={setDate}
                    minimumDate={new Date()}
                    androidVariant="iosClone"
                    locale="ko"
                    style={{
                        alignSelf: "center",
                    }}
                />

                <View style={styles.subTitleContainer}>
                    <View style={styles.menuInfo}>
                        <IonIcon
                            name="alert-circle"
                            size={20}
                            color="#B4B4C6"
                        />
                        <Text style={styles.dateText}>Priority</Text>
                    </View>
                    <View style={styles.menuInfo}>
                        <TouchableOpacity
                            key="1"
                            onPress={() => handlePriorityButton(1)}
                        >
                            <View
                                style={{
                                    ...styles.priorityButton,
                                    backgroundColor:
                                        priority === 1
                                            ? "#DAF7E8"
                                            : "transparent",
                                    borderColor:
                                        priority === 1 ? "#4AD991" : "#B4B4C6",
                                }}
                            >
                                <View
                                    style={{
                                        ...styles.coloredCircle,
                                        backgroundColor: "#4AD991",
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key="2"
                            onPress={() => handlePriorityButton(2)}
                        >
                            <View
                                style={{
                                    ...styles.priorityButton,
                                    backgroundColor:
                                        priority === 2
                                            ? "#FFF4E5"
                                            : "transparent",
                                    borderColor:
                                        priority === 2 ? "#FFCA83" : "#B4B4C6",
                                }}
                            >
                                <View
                                    style={{
                                        ...styles.coloredCircle,
                                        backgroundColor: "#FFCA83",
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            key="3"
                            onPress={() => handlePriorityButton(3)}
                        >
                            <View
                                style={{
                                    ...styles.priorityButton,
                                    backgroundColor:
                                        priority === 3
                                            ? "#FFE2E6"
                                            : "transparent",
                                    borderColor:
                                        priority === 3 ? "#FF7285" : "#B4B4C6",
                                }}
                            >
                                <View
                                    style={{
                                        ...styles.coloredCircle,
                                        backgroundColor: "#FF7285",
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableHighlight
                style={styles.submitButton}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>SAVE</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

export default InputForm;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    subTitleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "5%",
        marginVertical: "10%",
    },
    menuInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    dateText: {
        marginLeft: 8,
    },
    switch: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    input: {
        height: 40,
        margin: 12,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: "#8280FF",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "white",
        shadowColor: "#E8E7FF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    priorityButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 16,
        borderColor: "#B4B4C6",
        alignItems: "center",
        justifyContent: "center",
    },
    coloredCircle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#4AD991",
    },

    submitButton: {
        backgroundColor: "#8280FF",
        marginHorizontal: "5%",
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 14,
    },

    buttonText: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
    },
});

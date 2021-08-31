import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from "react-native";
import { addTodo } from "../api/fetchTodo.api";
import DatePicker from "react-native-date-picker";
import { IonIcon } from "../components/Icons/Icon";
import moment from "moment";
import "moment/locale/ko";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { actApiRequest } from "../store/actions";

const AddTaskModal = () => {
    const [text, onChangeText] = useState<string>("");
    const [date, setDate] = useState<Date>(new Date());
    const [isOnDate, setIsOnDate] = useState(true);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const toggleDateSwitch = () => setIsOnDate((prevState) => !prevState);

    const handleSubmit = () => {
        if (text) {
            isOnDate ? addTodo(text, date) : addTodo(text);
            dispatch(actApiRequest());
            navigation.goBack();
        }
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
                <View style={styles.dateContainer}>
                    <View style={styles.dateInfo}>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    dateContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "5%",
    },
    dateInfo: {
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

export default AddTaskModal;

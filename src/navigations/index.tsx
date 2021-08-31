import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "../components/Icons/Icon";
import AddTaskModal from "../screens/AddTaskModal";
import TodoList from "../screens/TodoList";
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types/Navigation.types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
    return (
        <NavigationContainer linking={LinkingConfiguration}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Group
                screenOptions={({ navigation, route }) => ({
                    presentation: "modal",
                    headerTitleStyle: {
                        fontSize: 24,
                        fontWeight: "bold",
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <TabBarIcon name="chevron-left" color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: "Add Task",
                })}
            >
                <Stack.Screen name="Modal" component={AddTaskModal} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const CreatePlaceholder = () => (
    <View style={{ flex: 1, backgroundColor: "blue" }} />
);

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="TaskList"
            screenOptions={{
                tabBarActiveTintColor: "#5552fd",
                tabBarInactiveTintColor: "#333",
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "bold",
                },
                tabBarStyle: {
                    backgroundColor: "#fff",
                },
                headerTitleAlign: "left",
                headerStyle: {
                    backgroundColor: "white",
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
            }}
        >
            <BottomTab.Screen
                name="TaskList"
                component={TodoList}
                options={({ navigation }: RootTabScreenProps<"TaskList">) => ({
                    title: "Task List",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="list" color={color} />
                    ),
                })}
            />
            <BottomTab.Screen
                name="Create"
                component={CreatePlaceholder}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                position: "absolute",
                                bottom: 10,
                                height: 48,
                                width: 48,
                                borderRadius: 48,
                                backgroundColor: "#8280FF",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <TabBarIcon name="plus" color="white" />
                        </View>
                    ),
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate("Modal");
                    },
                })}
            />
            <BottomTab.Screen
                name="Done"
                component={TodoList}
                options={{
                    title: "Done",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="check-circle" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

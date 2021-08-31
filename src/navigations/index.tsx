import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { View } from "react-native";
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
                screenOptions={{
                    presentation: "modal",
                    headerTitleStyle: {
                        fontSize: 24,
                        fontWeight: "bold",
                    },
                    headerLeft: () => (
                        <TabBarIcon name="chevron-left" color="black" />
                    ),
                    // headerTransparent: true,
                }}
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
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: "#e66e2c",
                tabBarInactiveTintColor: "white",
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "bold",
                },
                tabBarStyle: {
                    backgroundColor: "#2f324e",
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
                name="TabOne"
                component={TodoList}
                options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
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
                                backgroundColor: "#e66e2c",
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
                name="TabTwo"
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

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Feather>["name"];
    color: string;
}) {
    return <Feather size={24} style={{ marginBottom: -3 }} {...props} />;
}

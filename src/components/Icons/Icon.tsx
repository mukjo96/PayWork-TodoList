import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

export function TabBarIcon(props: {
    name: React.ComponentProps<typeof Feather>["name"];
    color: string;
}) {
    return <Feather size={24} style={{ marginBottom: -3 }} {...props} />;
}

export function FeatherIcon(props: {
    name: React.ComponentProps<typeof Feather>["name"];
    color: string;
    size: number;
}) {
    return <Feather {...props} />;
}

export function IonIcon(props: {
    name: React.ComponentProps<typeof Ionicons>["name"];
    color: string;
    size: number;
}) {
    return <Ionicons {...props} />;
}

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types/Navigation.types";

//앱 내부 라우팅을 위한 Linking 설정
const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    TaskList: {
                        screens: {
                            TabOneScreen: "one",
                        },
                    },
                    Done: {
                        screens: {
                            TabTwoScreen: "two",
                        },
                    },
                },
            },
            AddModal: "addModal",
            EditModal: "editModal",
            NotFound: "*",
        },
    },
};

export default linking;

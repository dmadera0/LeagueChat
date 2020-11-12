import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
// import PostScreen from "../screens/PostScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import ProfileScreen from "../screens/ProfileScreen";


export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator()

    const tabBarOptions = {
        showLabel: false,
        style: {
            backgroundColor: "#8022d9",
            paddingBototm: 12,
        },
    };

    const screenOptions = ({route}) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "ios-home"

            switch (route.name){
                case "Home":
                    iconName = "ios-home";
                    break;

                case "Message":
                    iconName = "ios-chatboxes";
                    break;

                case "Schedule":
                    iconName = "ios-calendar";
                    break;

                case "Profile":
                    iconName = "ios-person";
                    break;

                // default:
                //     iconName = "ios-home";

            }

            return <Ionicons name={iconName} size={24} color={focused ? "#ffffff" : "#bfbfbf"} />;

        }
    })

    

    return (
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Message" component={MessageScreen} />
            {/* <MainStack.Screen name="Post" component={PostScreen} /> */}
            <MainStack.Screen name="Schedule" component={ScheduleScreen} />
            <MainStack.Screen name="Profile" component={ProfileScreen} />
        </MainStack.Navigator>
    );

}
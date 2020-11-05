import React from 'react'
import { View, Text, StyleSheet } from "react-native"

export default HomeScreen = () => {
    return (
        <view style ={Style.container}>
            <Text>NotificationScreen</Text>
        </view>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
import React from 'react'
import { View, Text, StyleSheet } from "react-native"

export default HomeScreen = () => {
    return (
        <View style ={styles.container}>
            <Text>MessengerScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
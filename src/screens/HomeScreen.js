import React from 'react'
import { View, Text, StyleSheet } from "react-native"

export default HomeScreen = () => {
    return (
        <View style ={styles.container}>
            <Text style={styles.textContainer}>
                Anouncements
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding:30,
        marginTop: 10,
        height: 80,
    // backgroundColor: "#8022d9",
    alignItems:"center"   
    },
    textContainer:{
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    }
})
import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native"
import announcement from '../images/announcement.png'

export default HomeScreen = () => {
    return (
        <View style ={styles.container}>
            {/* <Text style={styles.textContainer}>
                Anouncements
            </Text> */}
            <View style ={styles.imageBackground}>
                <Image source={announcement} style={styles.backgroundImage}/>
                <Text style={styles.imageText}>                    Announcements!</Text>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        padding:30,
        marginBottom: 10,
        height: 80,
    // backgroundColor: "#8022d9",
    alignItems:"center"   
    },
    textContainer:{
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    imageBackground:{
        position: "absolute",
        marginBottom: 10,
        opacity: 0.5
    },
    imageText:{
        fontSize: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})
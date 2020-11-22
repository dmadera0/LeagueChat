import React from 'react'
import { View, Text, StyleSheet, Image} from "react-native"
import announcement from '../images/announcement.png'
import styled from "styled-components";
import { color } from 'react-native-reanimated';
import { Title } from 'native-base';


export default HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>Announcements!</Title>
            <Image source={announcement} style={styles.Image}/>
        <HeaderGraphic>
            <RightCircle/>
            <LeftCircle/>
        </HeaderGraphic>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#ffff",
           
    },
    Image:{
        width: "100%",
         height: 500,
         overflow: "hidden",        

        

    },
    title:{
        fontSize: 29,
        alignItems: "flex-start",
    },

})
const RightCircle = styled.View`
background-color: #8022d9;
position: absolute;
width: 400px;
height: 400px;
border-radius: 200px;
right: -100px;
top: -200px;
`;

const LeftCircle = styled.View`
background-color: #23a6d5;
position: absolute;
width: 200px;
height: 200px;
border-radius: 100px;
left: -50px;
top: -50px;
`;

const HeaderGraphic = styled.View`
position: absolute;
width: 100%;
top: -50px;
z-index: -100;
`;
import { Title } from 'native-base';
import React from 'react'
import { View, StyleSheet } from "react-native"
import {Card} from 'react-native-shadow-cards';
import styled from "styled-components";
import Text from '../components/Text'


export default ScheduleScreen = () => {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>Schedule</Title>
        <Card style={{padding: 10, margin: 10}}>
            <Title>Week 1</Title>
            <Text>GitForked vs. OnlySpans</Text>
            <Text>Damons Devs vs. Ahmeds Algos</Text>
            <Text>Kyles KeyBoards vs. Jons JSONs</Text>
            <Text>Kristines Kotlin vs. Brians BigData</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
            <Title>Week 2</Title>
            <Text>GitForked vs. Ahmed Algos</Text>
            <Text>Damons Devs vs. Jons JSONS</Text>
            <Text>Kyles KeyBoards vs. Brians BigData</Text>
            <Text>Kristines Kotlin vs. OnlySpans</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
            <Title>Week 3</Title>
            <Text>GitForked vs. Jons JSONs</Text>
            <Text>Damons Devs vs. Brians BigData</Text>
            <Text>Kyles KeyBoards vs. OnlySpans</Text>
            <Text>Kristines Kotlin vs. Ahmed Algos</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
            <Title>Week 4</Title>
            <Text>GitForked vs. Brians BigData</Text>
            <Text>Damons Devs vs. OnlySpans</Text>
            <Text>Kyles KeyBoards vs. Ahmeds Algos</Text>
            <Text>Kristines Kotlin vs. Jons JSONs</Text>
        </Card>
        <HeaderGraphic>
               <RightCircle/>
               <LeftCircle/>
           </HeaderGraphic>
        </View>
      );
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: '#8022d9',
        },
        title:{
            fontSize: 35,

        }
        
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
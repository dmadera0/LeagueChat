import { Title } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, Header } from "react-native"
import {Card} from 'react-native-shadow-cards';


export default ScheduleScreen = () => {
    return (
        <View style={styles.container}>
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
        </View>
      );
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: '#8022d9',
        }
    })
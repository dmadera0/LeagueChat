import { Row, Title } from 'native-base';
import React from 'react'
import { View, StyleSheet } from "react-native"
import {Card} from 'react-native-shadow-cards';
import styled from "styled-components";
import Text from '../components/Text'


export default ScheduleScreen = () => {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>Schedule</Title>
        <Card style={{padding: 10, margin: 10 }}>
            <Title style = {styles.cardTitle}>Week 1</Title>
            <Text style= {styles.cardText}>GitForked vs. OnlySpans</Text>
            <Text style= {styles.cardText}>Damons Devs vs. Ahmeds Algos</Text>
            <Text style= {styles.cardText}>Kyles KeyBoards vs. Jons JSONs</Text>
            <Text style= {styles.cardText}>Kristines Kotlin vs. Brians BigData</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
            <Title style = {styles.cardTitle}>Week 2</Title>
            <Text style= {styles.cardText}>GitForked vs. Ahmed Algos</Text>
            <Text style= {styles.cardText}>Damons Devs vs. Jons JSONS</Text>
            <Text style= {styles.cardText}>Kyles KeyBoards vs. Brians BigData</Text>
            <Text style= {styles.cardText}>Kristines Kotlin vs. OnlySpans</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
            <Title style = {styles.cardTitle}>Week 3</Title>
            <Text style= {styles.cardText}>GitForked vs. Jons JSONs</Text>
            <Text style= {styles.cardText}>Damons Devs vs. Brians BigData</Text>
            <Text style= {styles.cardText}>Kyles KeyBoards vs. OnlySpans</Text>
            <Text style= {styles.cardText}>Kristines Kotlin vs. Ahmed Algos</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
            <Title style = {styles.cardTitle}>Week 4</Title>
            <Text style= {styles.cardText}>GitForked vs. Brians BigData</Text>
            <Text style= {styles.cardText}>Damons Devs vs. OnlySpans</Text>
            <Text style= {styles.cardText}>Kyles KeyBoards vs. Ahmeds Algos</Text>
            <Text >Kristines Kotlin vs. Jons JSONs</Text>
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
            alignItems: "flex-start",
            // backgroundColor: '#8022d9',
        },
        title:{
            fontSize: 35,
            alignItems: "flex-start",
        },
        cardTitle:{
            color: "#8022d9",
            marginBottom: 3,
            // flex: 1,
            // flexDirection: 'row',
        },
        cardText:{
            padding: 20,
            marginBottom: 3,
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
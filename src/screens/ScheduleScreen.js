import { Title } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, Header } from "react-native"
import {Card} from 'react-native-shadow-cards';

// // // const teamArray = ["GitForked", "only<spans>","Damons Divs","Ahmeds Algos",
// // // "Kyles Keyboards", "Jons Jsons", "Kristines Kotlins", "Brians BigData"]
// const cards = [
//     {
//       id: "0",
//       title: "Week 1",
//     //   picture: require('./assets/starry.jpg'),
//       content: <View>
//       <Text>GitForked vs. OnlySpans</Text>
//       <Text>Damons Devs vs. Ahmeds Algos</Text>
//       <Text>Kyles KeyBoards vs. Jons JSONs</Text>
//       <Text>Kristines Kotlin vs. Brians BigData</Text>
//       </View>

//     },
//     {
//       id: "1",
//       title: "Week 2",
//     //   picture: require('./assets/wheat.jpg'),
//       content: <View>
//           <Text>GitForked vs. Ahmed Algos</Text>
//       <Text>Damons Devs vs. Jons JSONS</Text>
//       <Text>Kyles KeyBoards vs. Brians BigData</Text>
//       <Text>Kristines Kotlin vs. OnlySpans</Text>
//           </View>
//     },
//     {
//       id: "2",
//       title: "Week 3",
//     //   picture: require('./assets/bed.jpg'),
//       content: <View>
//       <Text>GitForked vs. Jons JSONs</Text>
//   <Text>Damons Devs vs. Brians BigData</Text>
//   <Text>Kyles KeyBoards vs. OnlySpans</Text>
//   <Text>Kristines Kotlin vs. Ahmed Algos</Text>
//       </View>
//     },
//     {
//         id: "3",
//         title: "Week 4",
//       //   picture: require('./assets/bed.jpg'),
//         content: <View>
//         <Text>GitForked vs. Brians BigData</Text>
//     <Text>Damons Devs vs. OnlySpans</Text>
//     <Text>Kyles KeyBoards vs. Ahmeds Algos</Text>
//     <Text>Kristines Kotlin vs. Jons JSONs</Text>
//         </View>
//       }
//   ]




export default ScheduleScreen = () => {
    return (
        <View style={styles.container}>

          <Card style={{padding: 10, margin: 10}}>
              <Title>Week 1</Title>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </Card>
          <Card style={{padding: 10, margin: 10}}>
          <Title>Week 1</Title>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </Card>
          <Card style={{padding: 10, margin: 10}}>
          <Title>Week 1</Title>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </Card>
          <Card style={{padding: 10, margin: 10}}>
          <Title>Week 1</Title>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
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
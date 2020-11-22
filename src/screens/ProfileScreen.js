import React, { useContext } from "react";
import styled from "styled-components";
import { View, StyleSheet } from "react-native"
import { Container, Title } from 'native-base';
import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";
import Text from "../components/Text";
export default ProfileScreen = () => {
    const [user, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    const logOut = async () => {
        const loggedOut = await firebase.logOut();

        if (loggedOut) {
            setUser((state) => ({ ...state, isLoggedIn: false }));
        }
    };
    return (
        <Container>
        <View style={styles.container}>
        <Title style={styles.title}>Profile</Title>
        <Text large bold margin="16px 0 32px 0">
        {user.username}
        </Text>

        <Logout onPress={logOut}>
                <Text large bold color="#23a8d9">
                    Log out
                </Text>
            </Logout>
            <HeaderGraphic>
            <RightCircle/>
            <LeftCircle/>
        </HeaderGraphic>
        </View>   
        </Container>
       
    );
};




const styles = StyleSheet.create({
    title:{
        fontSize: 45,
        alignItems: "flex-start",
        height: "60%",
        right: "30%",

    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff",
        
    },
    
});

const Logout = styled.TouchableOpacity`
    margin-bottom: 32px;
`;

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





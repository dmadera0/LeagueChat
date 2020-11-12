# LeagueChat
A mobile messaging app developed for Rec sports leagues.
# Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
## General Info
LeagueChat is a full-Stack mobile application that allows users to communicate via text message with each other. It also provides information about games, and any announcements that might be pertant to the league.

# Intro Video

# Technologies
* React Native - version 0.63
* Firebase Authentication
* Firebase Storage


## Setup
1. Clone this repository down to your local computer.
2. In Command line, 

## Code Examples
```javascript
 const signIn = async () => {
        setLoading(true);

        try {
            await firebase.signIn(email, password);

            const uid = firebase.getCurrentUser().uid;

            const userInfo = await firebase.getUserInfo(uid);

            setUser({
                username: userInfo.username,
                email: userInfo.email,
                uid,
                profilePhotoUrl: userInfo.profilePhotoUrl,
                isLoggedIn: true,
            });            
```

## Features
* real time chat functionalitiy
* Easy to use UI design
* 4 week league schedule
* Firebase Authentication for user security

## Inspiration
The inspiration for this project came from my constant frustration with my local Rec Sports leagues, fumbling information and consistant miss communication amongst team members.
## Contact
Created by [Daniel Madera](https://www.linkedin.com/in/daniel-madera-925b4987/)

Please feel free to contact me!


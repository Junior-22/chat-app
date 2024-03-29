# Chat-app

![Screenshot](chat-app.jpg)


## Objective

The objective is to build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images, pictures and their location.


## Getting started
The easiest way to start is to clone the repository.


## Clone the repository

git clone https://github.com/Junior-22/chat-app


## User Stories

● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.

● As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.

● As a user, I want to send images to my friends to show them what I’m currently doing.

● As a user, I want to share my location with my friends to show them where I am.

● As a user, I want to be able to read my messages offline so I can reread conversations at any
time.

● As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.


## Key Features

● A page where users can enter their name and choose a background color for the chat screen
before joining the chat.

● A page displaying the conversation, as well as an input field and submit button.

● The chat must provide users with two additional communication features: sending images
and location data.

● Data gets stored online and offline.


## Technical Requirements

● The app is written in React Native.

● The app is developed using Expo.

● The app is styled according to the given screen design.

● Chat conversations are stored in Google Firestore Database.

● The app authenticates users anonymously via Google Firebase authentication.

● Chat conversations are stored locally.

● The app lets users pick and send images from the phone’s image library.

● The app lets users take pictures with the device’s camera app, and send them.

● The app stores images in Firebase Cloud Storage.

● The app can read the user’s location data.

● Location data is sent via chat in a map view.

● The chat interface and functionality are created using the Gifted Chat library.

● The app’s codebase contains comments.


## Technologies

● React Native

● Expo

● Google Firebase

● Gifted Chat


## Installation

● Node.js and npm

● Expo / Expo Go

    npm install expo-cli -g

● [Android Studio](https://developer.android.com/studio) for Windows & Linux users

● [Xcode](https://developer.apple.com/xcode/) for Mac users

● Install the Expo app on your mobile device (available in Google Play Store and Apple Store)


**Install required packages from package.json***

● Download this repo

● Navigate to the root folder via CLI

● Install required packages in [package.json](https://github.com/Junior-22/chat-app/blob/main/package.json)


## Run the App

● Navigate to the root folder

● Run "expo start" or "npm start"

● Expo will build the project and display development options in a browser window.

● The Expo Go app can be used to show the app on a physical device. Scan the QR Code in the development options with the app

● The app can also be run through an emulator on your desktop via Expo

## Setup database

Create a google Firebase/Firestore account for storage. [Check the firebase manual](https://firebase.google.com/docs/web/setup")

1. Sign in to your [Google Firebase account](https://firebase.google.com/)

2. Click on "create a project" and follow the steps. Choose test mode then start a collection, ("Auto-ID" to generate a random Document ID).

3. Install Firestore via Firebase: npm install firebase

4. Import firebase into your chat.js file

5. Back in the Firebase project in the browser, open up "Project settings", then "General" tab. Under the section "Your apps", link Firebase to app by clicking the tag icon (</>).

6. After connecting, it will generate configurations for different platforms. Here, click "Firestore for Web" and then copy the contents of the config object info into your chat.js file.

## Lessons

**working with firebase storage**

I had some issues originating from firebase/firestore. One example was that expo would crash as soon as I tried to upload an image or take a picture. I tried several approaches to get to the bottom of this. What worked for me was to adjust my storage rules

    rules_version = '2';
    service firebase.storage {
      match /b/{bucket}/o {
        match /{allPaths=**} {
          allow read, write: if true;
        }
        match /users/{userId}/{allPaths=**} {
          allow read: if true;
          allow write: if request.auth.uid == userId;
        }
      }
    }

**working with react-native**

I had issues with my onActionPress which returned an error "TypeError: _this.context.actionSheet is not a function. (In '_this.context.actionSheet()', '_this.context.actionsSHeet' is undefined)". Even though, my code was explicitly written, I realised the problem was with GiftedChat. I downgraded from version 1.0.4 to version 0.16.3 and it solved the issue.

Once offline, the messages in the chat disappeared, because AsyncStorage has been extracted from react-native core, and I had to install and import @react-native-async-storage/async-storage instead of react-native.

**working with Expo**

Repeatedly the expo web browser did not open because of dependency issues with packages from react native. e.g, Expo required me to use more outdated versions of @react-native-community/netinfo as well as react-native-maps to be compatible with Expo.

**the whole project**

I often had problems resulting from the combination of expo, react-native and firebase. I had to continuously figure out where it came from and debug the problem. As always it was enriching to try out new libraries and services or apply familiar technologies in a new context.


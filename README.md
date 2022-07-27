<h2>Chat-app</h2>

<h3>Objective</h3>

The objective is to build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images, pictures and their location.


<h3>GETTING STARTED</h3>
The easiest way to start is to clone the repository.


<h3>clone the repository</h3>

git clone https://github.com/Junior-22/chat-app


<h3>User Stories</h3>

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


<h3>Key Features</h3>

● A page where users can enter their name and choose a background color for the chat screen
before joining the chat.

● A page displaying the conversation, as well as an input field and submit button.

● The chat must provide users with two additional communication features: sending images
and location data.

● Data gets stored online and offline.


<h3>Technical Requirements</h3>

● The app is written in React Native.

● The app is developed using Expo.

● The app is styled according to the given screen design.

● Chat conversations are stored in Google Firestore Database.

● The app authenticates users anonymously via Google Firebase authentication.

● Chat conversations are stored locally.

● The app lets users pick and send images from the phone’s image library.

● The app lets users take pictures with the device’s camera app, and send them.

● The app stores images in Firebase Cloud Storage.

● The app is able to read the user’s location data.

● Location data is sent via the chat in a map view.

● The chat interface and functionality are created using the Gifted Chat library.

● The app’s codebase contains comments.


<h3>Technologies</h3>

● React Native

● Expo

● Google Firebase

● Gifted Chat


<h3>Installation</h3>

● Node.js and npm

● Expo / Expo Go

  npm install expo-cli -g

● <a href="https://developer.android.com/studio">Android Studio</a> for Windows & Linux users 

- <a href="https://developer.apple.com/xcode/">Xcode</a> for Mac users

- Install the Expo app on your mobile device (available in Google Play Store and Apple Store)


<b>Install required packages from package.json</b>

● Download this repo

● Navigate to the root folder via CLI

● Install required packages in <a href="https://github.com/Junior-22/chat-app/blob/main/package.json">package.json</a>


<h3>Run the App</h3>

● Navigate to the root folder

● Run expo start or npm start

● Expo will build the project and display development options in a browser window.

● The Expo Go app can be used to show the app on a physical device. Scan the QR Code in the development options with the app

● The app can also be run through an emulator on your desktop via Expo

<h3>Setup database</h3>

Create a google Firebase/Firestore account for storage. <a href="https://firebase.google.com/docs/web/setup">Check the firebase manual</a>

1. Sign in to your <a href="https://firebase.google.com/">Google Firebase account</a>

2. Click on "create a project" and follow the steps. Choose test mode then start a collection, ("Auto-ID" to generate a random Document ID).

3. Install Firestore via Firebase: npm install firebase

4. Import firebase into your chat.js file

5. Back in the Firebase project in the browser, open up "Project settings", then "General" tab. Under the section "Your apps", link Firebase to app by clicking the tag icon (</>).

6. After connecting, it will generate configurations for different platforms. Here, click "Firestore for Web" and then copy the contents of the config object info into your chat.js file.


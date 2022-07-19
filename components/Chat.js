import React, { Component } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
// import GiftedChat for messaging 
import { GiftedChat, Bubble } from "react-native-gifted-chat";

// establish a connection to Firestore
const firebase = require("firebase");
require("firebase/firestore");

export default class Chat extends Component {

  // initialise state within the constructor
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: "",
        name: "",
        avatar: ""
      }
    }

    // app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDwEgmj70N64JsWclY0toIAvRlwBewkSDU",
      authDomain: "chatapp-73290.firebaseapp.com",
      projectId: "chatapp-73290",
      storageBucket: "chatapp-73290.appspot.com",
      messagingSenderId: "397157238401",
      appId: "1:397157238401:web:ae65e82051c0cbf0f9af80",
      measurementId: "G-HVFPM27EEX"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Reference to Firestore collection
    this.referenceChatMessages = firebase.firestore().collection("messages");
  }

  // componentDidMount() {
  //   this.setState({
  //     messages: [
  //       {
  //         _id: 1,
  //         text: "Hello developer",
  //         createAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: "React Native",
  //           avatar: "https://placeimg.com/140/140/any",
  //         },
  //       },

  //       // Advanced Gifted Chat: System Messages
  //       {
  //         _id: 2,
  //         text: "This is a system message",
  //         createdAt: new Date(),
  //         system: true,
  //         color: "black"
  //       },
  //     ],
  //   })
  // }

  componentDidMount() {
    // Reference to load messages from Firebase
    this.referenceChatMessages = firebase.firestore().collection("messages");

    // Authenticate user anonymously
    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }

      // update user state with currently active user data
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          avatar: "https://placeimg.com/140/140/any",
        },
      });

      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    // stop listening for changes
    this.unsubscribe();
    // stop listening to authentication
    this.authUnsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
          avatar: data.user.avatar
        }

      });
    });
    this.setState({
      messages,
    });
  }

  // function to be called when a user sends a message
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    })), () => {
      this.addMessages();
    };
  }

  // add messages to firestore
  addMessages = (message) => {
    this.referenceChatMessages.add({
      _id: message._id,
      text: message.text,
      createdAt: message.createdAt,
      user: message.user,
      uid: this.state.uid
    });
  }

  // Custom message bubble
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "orange",
            padding: 5
          },
          left: {
            backgroundColor: "teal",
            padding: 5
          }
        }}
        textStyle={{
          right: {
            color: "black"
          },
          left: {
            color: "white"
          }
        }}
      />
    );
  }

  render() {
    // Retrieving the name and color properties passed from the Start Screen
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    let { bgColor } = this.props.route.params;
    this.props.navigation.setOptions({ bgColor });
    // let { name, color } = this.props.route.params

    return (

      // render the chat interface
      <View style={{ flex: 1, backgroundColor: bgColor }}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {/* fix message input field on android keyboard */}
        {Platform.OS === "android" ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    );
  }
}
import React, { Component } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
// import GiftedChat for messaging 
import { GiftedChat, Bubble } from "react-native-gifted-chat";

export default class Chat extends Component {

  // initialise state within the constructor
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },

        // Advanced Gifted Chat: System Messages
        {
          _id: 2,
          text: "This is a system message",
          createdAt: new Date(),
          system: true,
          color: "black"
        },
      ],
    })
  }

  // function to be called when a user sends a message
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  // Custom message bubble
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "orange",
            padding: 10
          },
          left: {
            backgroundColor: "teal",
            padding: 10
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
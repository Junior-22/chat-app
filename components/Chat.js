import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Chat extends Component {

  render() {
    // Retrieving the name and color properties passed from the Start Screen
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    let { bgColor } = this.props.route.params;
    // let { name, color } = this.props.route.params

    return (

      <View style={{ flex: 1, backgroundColor: bgColor, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Here is the chat screen</Text>
      </View>

    );
  }
}
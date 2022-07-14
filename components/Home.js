import React, { Component, useState } from "react";

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity
} from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);

    // add user's name & background color to state
    this.state = {
      name: "",
      bgColor: ""
    };

  }

  // function to update the state with the new background color for Chat Screen chosen by the user
  changeBgColor = (newColor) => {
    this.setState({ bgColor: newColor });
  };

  // background colors to choose
  colors = {
    black: "#090C08",
    purple: "#474056",
    gray: "#8A95A5",
    green: "#B9C6AE",
    blue: "#1B70A0",
  };

  render() {

    return (

      <View style={styles.container}>

        {/* set app background */}
        <ImageBackground
          source={require("../assets/background-image.png")}
          resizeMode="cover"
          style={styles.image}
        >

          <Text style={styles.title}>ChatApp</Text>

          <View style={styles.inner}>

            {/* field to set the user's name passed to chat screen */}
            <TextInput
              style={styles.input}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder='Your name'
            />

            {/* Allow user to choose a background color for the chat screen */}
            <Text style={styles.text}>
              Choose Background Color
            </Text>
            <View style={styles.colorContainer}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => this.changeBgColor(this.colors.black)}
              />
              <TouchableOpacity
                style={styles.color2}
                onPress={() => this.changeBgColor(this.colors.purple)}
              />
              <TouchableOpacity
                style={styles.color3}
                onPress={() => this.changeBgColor(this.colors.gray)}
              />
              <TouchableOpacity
                style={styles.color4}
                onPress={() => this.changeBgColor(this.colors.green)}
              />
              <TouchableOpacity
                style={styles.color5}
                onPress={() => this.changeBgColor(this.colors.blue)}
              />
            </View>

            {/* navigate to the chat screen, display user's name in the nav bar of the chat screen & bgColor */}
            <Pressable
              style={[styles.button, styles.buttontext]}
              title="Go to Chat"
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  bgColor: this.state.bgColor
                })}
            >
              <Text style={styles.buttontext}>Start chatting</Text>
            </Pressable>

            {/* allow the user to click on a button and be redirected to the chat page */}
            {/* <Button
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  bgColor: this.state.bgColor,
                })}
              title="Start chatting"
            /> */}
          </View>
        </ImageBackground >
      </View >

    );
  }
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
  },

  inner: {
    width: "88%",
    height: "44%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  input: {
    height: 50,
    width: "88%",
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,

  },

  text: {
    color: "#757083",
    fontSize: 16,
    fontWeight: "300",
    opacity: 50,
  },

  colorContainer: {
    width: "88%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  color1: {
    backgroundColor: "#090C08",
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  color2: {
    backgroundColor: "#474056",
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  color3: {
    backgroundColor: "#8A95A5",
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  color4: {
    backgroundColor: "#B9C6AE",
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  color5: {
    backgroundColor: "#1B70A0",
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  button: {
    height: 50,
    width: "88%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#757083"
  },

  buttontext: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  }
});
import React, { Component, useState } from "react";
// import BackgroundImage from "../img/background-image.png";
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

    this.state = {
      name: "",
      bgColor: this.colors.blue,
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
    green: "B9C6AE",
    blue: "#1B70A0",
  };

  render() {

    return (

      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background-image.png")}
          resizeMode="cover"
          style={styles.image}
        >

          <Text style={styles.title}>App title</Text>

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
              {" "}
              Choose Background Color{" "}
            </Text>
            <View style={styles.colorContainer}>
              <TouchableOpacity
                style={styles.colorButton}
                onPress={() => this.changeBgColor(this.colors.black)}
              />
              <TouchableOpacity
                style={styles.colorButton}
                onPress={() => this.changeBgColor(this.colors.purple)}
              />
              <TouchableOpacity
                style={styles.colorButton}
                onPress={() => this.changeBgColor(this.colors.gray)}
              />
              <TouchableOpacity
                style={styles.colorButton}
                onPress={() => this.changeBgColor(this.colors.green)}
              />
              <TouchableOpacity
                style={styles.colorButton}
                onPress={() => this.changeBgColor(this.colors.blue)}
              />
            </View>
            {/* <Pressable
              style={[styles.button, styles.buttontext]}
              title="Go to Chat"
              onPress={() => this.props.navigation.navigate("Chat", { name: this.state.name })}
            >
              <Text style={styles.buttontext}>Start chatting</Text>
            </Pressable> */}

            {/* allow the user to click on a button and be redirected to the chat page */}
            <Button
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  // bgColor: this.state.bgColor,
                })}
              title="Start chatting"
            />
          </View>
        </ImageBackground >
      </View >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
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

  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  button: {
    height: 50,
    width: "88%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttontext: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  }
});
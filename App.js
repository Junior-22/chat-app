import React, { Component } from "react";
import "react-native-gesture-handler"
// import react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import navigation screens
import Home from "./components/Home";
import Chat from "./components/Chat";

// create the navigator
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
            name="Home"
            component={Home}
          />

          <Stack.Screen
            name="Chat"
            component={Chat}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

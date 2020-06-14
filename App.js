import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screen/LoginScreen";
import HomeScreen from "./Screen/HomeScreen";
import SplashScreen from "./Screen/SplashScreen";
import buyScreen from "./Screen/buyScreen";
import SingupScreen from "./Screen/singupScreen.js";



const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    Login: true,
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4500);
  }

  render() {
    return (
      <NavigationContainer>
        {this.state.isLoading ? (
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{
            headerShown: false,               
            }} />
          </Stack.Navigator>
        ) : !this.state.Login ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Đăng Nhập",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#00b5ec" },
                headerTitleStyle: {
                  fontWeight: "bold",
                }
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Danh sản phẩm",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#00b5ec" },
                headerTitleStyle: { fontWeight: "bold",
            }
              }}
            />
              <Stack.Screen
              name="Buy"
              component={buyScreen}
              options={{
                title: "Giỏ hàng",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#00b5ec" },
                headerTitleStyle: { fontWeight: "bold",
            }
              }}
            />
            <Stack.Screen
              name="Singup"
              component={SingupScreen}
              options={{
                title: "Đăng kí",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#00b5ec" },
                headerTitleStyle: { fontWeight: "bold",
            }
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

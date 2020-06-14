import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  TouchableHighlight
} from "react-native";

export default function singupScreen({ navigation }) {
  const [Username, setUsername] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [RePassword, setRePassword] = useState();

  const _signUpUser = async () => {
    if (Password === RePassword) {
      let user = {
        email: Email,
        password: Password,
        name: Username,
        password2: RePassword,
      };
      try {
        let result = await fetch("http://192.168.10.101:5000/createUser", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let resultJson = await result.json();
        if (resultJson.status) {
          navigation.navigate("Login")
        } else {
          Alert.alert(
            "Thông Báo",
            resultJson.msg,
            [
              {
                text: "Thoát",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        }
      } catch (error) {
        Alert.alert(
          "Thông Báo",
          "Có lỗi xảy ra",
          [
            {
              text: "Thoát",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "Thông Báo",
        "Mật khẩu không trùng khớp",
        [
          {
            text: "Thoát",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.inputContainer}>
      <Image
          style={styles.inputIcon}
          source={{
            uri: "https://t4.ftcdn.net/jpg/00/86/87/37/240_F_86873765_MQr4WhGHUEhzn6gZ8tuoUunc7FZabt1o.jpg",
          }}
        />
        <TextInput
         style={styles.inputs}
         placeholder="Username"
         underlineColorAndroid="transparent"
          onChangeText={(Username) => setUsername(Username)}
          value={Username}
        ></TextInput>
      </View>

      <View style={styles.inputContainer}>
      <Image
          style={styles.inputIcon}
          source={{
            uri: "https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261159_Po5JS7ds82XaePJIsG1MiEtHRzOeUPNj.jpg",
          }}
        />
        <TextInput
         style={styles.inputs}
         placeholder="Email"
         keyboardType="email-address"
         underlineColorAndroid="transparent"
          onChangeText={(Email) => setEmail(Email)}
          value={Email}
        ></TextInput>
      </View>

      <View style={styles.inputContainer}>
      <Image
          style={styles.inputIcon}
          source={{
            uri: "https://t3.ftcdn.net/jpg/00/97/00/00/240_F_97000081_lfkvlEA9aVOUurKo8iqJ5QB7o1ANeFJG.jpg",
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(Password) => setPassword(Password)}
          value={Password}
        ></TextInput>
      </View>

      <View style={styles.inputContainer}>
      <Image
          style={styles.inputIcon}
          source={{
            uri: "https://t3.ftcdn.net/jpg/00/97/00/00/240_F_97000081_lfkvlEA9aVOUurKo8iqJ5QB7o1ANeFJG.jpg",
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Confirm Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(RePassword) => setRePassword(RePassword)}
          value={RePassword}
        ></TextInput>
      </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={_signUpUser}>
        <Text  style={styles.loginText}> Đăng kí </Text>
        </TouchableHighlight>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
});

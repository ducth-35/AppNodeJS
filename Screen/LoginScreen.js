import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  TouchableHighlight,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const _signIn = async () => {
      let User = {
        email: Email,
        password: Password,
      };
      try {
        let result = await fetch("http://192.168.10.101:5000/signinuser", {
          method: "POST",
          body: JSON.stringify(User),
          headers: {
            "Contenwt-Type": "application/json",
          },
        });
        let resultJson = await result.json();
        if (resultJson.status) {
          console.log(resultJson) 
          navigation.navigate("Home")
          Alert.alert("Đăng nhập thành công")
        }else{
          Alert.alert("Đăng nhập thất bại")
        }
      } catch(err) {
        console.log(err.message)
      }
    }

  return (
    <View style={styles.container}>
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
          source={{ uri: "https://t3.ftcdn.net/jpg/00/97/00/00/240_F_97000081_lfkvlEA9aVOUurKo8iqJ5QB7o1ANeFJG.jpg" }}
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

   <TouchableHighlight
   style={[styles.buttonContainer, styles.loginButton]}
   onPress={_signIn}
   > 
         <Text style={styles.loginText}>Login</Text>
   </TouchableHighlight>

      <TouchableHighlight
     style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => {
          navigation.navigate("Singup");    
        }}
      >
        <Text  style={styles.loginText}>Register</Text>
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

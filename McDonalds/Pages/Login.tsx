import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView, 
  Keyboard
} from "react-native";

export default function Login({navigation}:any) {
  const handleLinkPress = () => {
    Linking.openURL("https://github.com/gabrielsn17");
  };

  const handleLogin = () =>{
    navigation.navigate('Home')
  }
  const handleRegister = () =>{
    navigation.navigate('Register')
  }

  const [emailFocused, setEmailFocused] = useState(false);
  const [senhaFocused, setSenhaFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonTextLogin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButtonRegister} onPress={handleRegister}>
          <Text style={styles.headerButtonTextRegister}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.login}>
            <TextInput
              style={[
                styles.input,
                emailFocused && styles.inputFocused 
              ]}
              placeholder="Email"
              placeholderTextColor="gray"
              onFocus={() => setEmailFocused(true)} 
              onBlur={() => setEmailFocused(false)} 
            />
            <TextInput
              style={[
                styles.input,
                senhaFocused && styles.inputFocused 
              ]}
              placeholder="Senha"
              placeholderTextColor="gray"
              onFocus={() => setSenhaFocused(true)} 
              onBlur={() => setSenhaFocused(false)} 
              secureTextEntry={true}
            />
            <Text style={styles.text}>
              <Text style={styles.link} onPress={handleLinkPress}>
                Esqueceu a senha?
              </Text>
            </Text>
          </View>
          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
              <View style={styles.facebookContainer}>
                <Image
                  source={require("../assets/logoFacebook.png")}
                  style={styles.imagemFacebook}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.textFacebook}>
                <Text style={styles.buttonTextLogin}>Entrar com Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
              <View style={styles.facebookContainer}>
                <Image
                  source={require("../assets/logoGoogle.png")}
                  style={styles.imagemFacebook}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.textFacebook}>
                <Text style={styles.buttonTextLogin}>Entrar com Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 0,
  },
  header: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderBottomWidth: 3,
    borderBottomColor: "#DCDCDC",
  },
  content: {
    flex: 1,
  },
  login: {
    marginBottom: 12,
    margin: 20,
  },
  input: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    paddingHorizontal: 15,
    marginTop: -10,
  },
  inputFocused: {
    borderBottomColor: "#ffc205", 
    borderBottomWidth: 2,
  },
  buttonContainer: {
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "#ffc205",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 3,
    color: "black",
  },
  text: {
    fontSize: 12,
    marginBottom: 20,
  },
  link: {
    color: "#4682c0",
    textDecorationLine: "none",
  },
  headerButton: {
    alignSelf: "flex-end",
    width: "40%",
    margin: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#ffc205",
  },
  headerButtonTextLogin: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "900",
  },
  headerButtonTextRegister: {
    textAlign: "center",
    fontSize: 15,
  },
  headerButtonRegister: {
    alignSelf: "flex-end",
    width: "40%",
    margin: 10,
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  buttonLogin: {
    margin: 20,
    height: 65,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
  },
  loginContainer: {
    height: 350,
    justifyContent: "center",
  },
  imagemFacebook: {
    height: 25,
    width: 25,
    alignSelf: "center",
  },
  facebookContainer: {
    height: "100%",
    width: 70,
    justifyContent: "center",
  },
  textFacebook: {
    justifyContent: "center",
  },
  buttonTextLogin: {
    textAlign: "center",
    marginTop: 3,
    color: "black",
    fontWeight: "700",
  },
});
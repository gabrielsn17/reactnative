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
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { CheckBox } from "react-native-elements";

export default function Register({ navigation }: any) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleHome = () => {
    navigation.navigate("Home");
  };
  const [emailFocused, setEmailFocused] = useState(false);
  const [senhaFocused, setSenhaFocused] = useState(false);
  const [confirmarSenhaFocused, setconfirmarSenhaFocused] = useState(false);
  const [cpfFocused, setcpfFocused] = useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const toggleCheckbox1 = () => setChecked1(!checked1);
  const [checked2, setChecked2] = React.useState(false);
  const toggleCheckbox2 = () => setChecked2(!checked2);
  const [checked3, setChecked3] = React.useState(false);
  const toggleCheckbox3 = () => setChecked3(!checked3);
  const handleLinkPress = () => {
    Linking.openURL("https://github.com/gabrielsn17");
  };
  return (
    <View style={styles.principal}>
      <View style={styles.container}>
        <View style={styles.preHeader} />
        <View style={styles.header}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={handleLogin}>
              <Icon name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.signUP}>
            <Text style={styles.registerText}>Registrar-se</Text>
          </View>
          <View style={styles.mesage}>
            <Text style={styles.textMesage}>
              Precisamos que você preencha todos os campos
            </Text>
          </View>
          <View>
            <TextInput
              style={[styles.input, emailFocused && styles.inputFocused]}
              placeholder="Email"
              placeholderTextColor="gray"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <TextInput
              style={[styles.input, senhaFocused && styles.inputFocused]}
              placeholder="Senha"
              placeholderTextColor="gray"
              onFocus={() => setSenhaFocused(true)}
              onBlur={() => setSenhaFocused(false)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.requisitos}>
            <Text style={styles.textRequisitos}>
              Deve ter entre 8 e 12 caracteres
            </Text>
            <Text style={styles.textRequisitos}>
              Deve incluir letras maiúsculas e minúsculas
            </Text>
            <Text style={styles.textRequisitos}>
              Deve incluir pelo menos um número e um caractere especial
            </Text>
          </View>
          <View>
            <TextInput
              style={[
                styles.input,
                confirmarSenhaFocused && styles.inputFocused,
              ]}
              placeholder="Confirmar senha"
              placeholderTextColor="gray"
              onFocus={() => setconfirmarSenhaFocused(true)}
              onBlur={() => setconfirmarSenhaFocused(false)}
              secureTextEntry={true}
            />
            <TextInput
              style={[styles.input, cpfFocused && styles.inputFocused]}
              placeholder="CPF/RNE"
              placeholderTextColor="gray"
              onFocus={() => setcpfFocused(true)}
              onBlur={() => setcpfFocused(false)}
            />
          </View>
          <View style={styles.containerBolado}>
            <View style={styles.checkBox}>
              <View style={styles.box1}>
                <CheckBox
                  checked={checked1}
                  onPress={toggleCheckbox1}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor="#ffc205"
                  uncheckedColor="gray"
                />
                <Text style={styles.label}>
                  Ao se registrar, você concorda com os novos
                  <Text style={styles.link} onPress={handleLinkPress}>
                    Termos e Condições
                  </Text>{" "}
                  do McDonald's e a{" "}
                  <Text style={styles.link} onPress={handleLinkPress}>
                    Política de Privacidade
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.checkBox}>
              <View style={styles.box1}>
                <CheckBox
                  checked={checked2}
                  onPress={toggleCheckbox2}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor="#ffc205"
                  uncheckedColor="gray"
                />
                <Text style={styles.label}>
                  Desejo receber envios de marketing por e-mail
                </Text>
              </View>
            </View>
            <View style={styles.checkBox}>
              <View style={styles.box1}>
                <CheckBox
                  checked={checked3}
                  onPress={toggleCheckbox3}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor="#ffc205"
                  uncheckedColor="gray"
                />
                <Text style={styles.label}>
                  Concordo que o Méqui utilize meu CPF, também indicado em
                  minhas compras nos Restaurantes McDonald's, para oferecer
                  produtos, serviços e ofertas personalizadas, tudo de acordo
                  com a {" "}
                  <Text style={styles.link} onPress={handleLinkPress}>
                    Política de Privacidade
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleHome}>
            <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor:"white"
  },
  principal: {
    flex: 1,
  },
  preHeader: {
    backgroundColor: "white",
    height: "2%",
    marginLeft:25,
    marginRight:25,
  },
  header: {
    backgroundColor: "white",
    height: "10%",
    flexDirection: "row",
    marginLeft:25,
    marginRight:25,
  },
  icon: {
    backgroundColor: "white",
    width: "20%",
    justifyContent: "center",
  },
  signUP: {
    backgroundColor: "white",
    height: 70,
    marginLeft:25,
    marginRight:25,
  },
  registerText: {
    fontSize: 30,
    fontWeight: "800",
  },
  mesage: {
    backgroundColor: "white",
    height: 40,
    marginLeft:25,
    marginRight:25,
  },
  textMesage: {
    fontSize: 14,
    color: "#696969",
  },
  input: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    paddingHorizontal: 15,
    marginTop: -10,
    marginLeft:25,
    marginRight:25,
  },
  inputFocused: {
    borderBottomColor: "#ffc205",
    borderBottomWidth: 2,
  },
  requisitos: {
    backgroundColor: "white",
    height: 90,
    marginLeft:25,
    marginRight:25,
  },
  textRequisitos: {
    fontSize: 12,
    color: "#696969",
    marginLeft: 25,
    marginBottom: 5,
  },
  checkBox: {
    backgroundColor: "white",
    height: 70,
    marginLeft:25,
    marginRight:25,
  },
  box1: {
    backgroundColor: "white",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#696969",
    maxWidth: "80%",
  },
  link: {
    color: "#4682c0",
    textDecorationLine: "none",
  },
  containerBolado: {
    height: 250,
  },
  buttonContainer: {
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "#ffc205",
    position:'relative',
  },
  buttonText: {
    textAlign: "center",
    marginTop: 3,
    color: "black",
  },
});

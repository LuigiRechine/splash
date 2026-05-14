import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import styles from "./css/style";
import { Link } from "expo-router";
import FormField from "./components/FormFiel";
import Button from "./components/Button";

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require("../assets/sesisenai.png")}
        ></Image>
      </View>
      <View style={styles.form}>
        <FormField label="Login" placeholder="Insira seu email" secure={false}/>
        <FormField label="Senha" placeholder="Insira sua senha" secure/>
        <View style={styles.contBaixo}>
          <View style={styles.baixo}>
            <Link href={"/cadastro"} style={styles.direita}>
              Cadastrar
            </Link>
            <Link href={"/esqueciSenha"} style={styles.direita}>
              Esqueci a senha
            </Link>
          </View>
        </View>
      </View>
      <View>
        <Link href={"/dashboard"} style={styles.botao}>
          <Button>
            ACESSAR
          </Button>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

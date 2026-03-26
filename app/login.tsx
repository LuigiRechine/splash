import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import styles from './css/style';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.img} source={require("../assets/sesisenai.png")}></Image>
        </View>
        <View style={styles.form}>
            <Text style={styles.esquerda}>Login</Text>
            <TextInput placeholder='Insira seu CPF' style={styles.input}/>
            <Text style={styles.esquerda}>Senha</Text>
            <TextInput placeholder='Insira seu CPF' style={styles.input}/>
            <Link href={''} style={styles.direita}>Cadastrar</Link>
            <Link href={''} style={styles.direita}>Esqueci a senha</Link>
        </View>
        <View>
            <Link href={''} style={styles.btn}>ENTRAR</Link>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
import { CommonActions } from "@react-navigation/native";
import auth from "../firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Alert } from "react-native";

export async function enviarValidacao(email, senha, NavigationPreloadManager) {
  try {
    const credencialUsuario = await createUserWithEmailAndPassword(auth, email, senha);
    const usuario = credencialUsuario.user;

    if (usuario) {
      await sendEmailVerification(usuario);
      Alert.alert(
        'Informação',
        'Um email de verificação foi enviado para: ' + email
      );

      NavigationPreloadManager.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Verificacao' }],
        })
      );
    }
  } catch (e) {
    console.log('Erro ao criar conta: ' + e.message);
    switch (e.code) {
      case 'auth/email-already-in-use':
        Alert.alert('Erro', 'O email já está em uso.');
        break;
      case 'auth/operation-not-allowed':
        Alert.alert('Erro', 'Problemas ao cadastrar o usuário.');
        break;
      default:
        Alert.alert('Erro', 'Erro desconhecido.');
    }
  }
}

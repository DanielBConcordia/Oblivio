//verifica se o email foi verificado

import auth from '../../utils/firebaseConfig';
import { CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native';

export async function Verificacao(NavigationPreloadManager) {
  try {
    await auth.signInWithEmailAndPassword(email, senha);
    const usuario = auth.currentUser;

    if (usuario && !usuario.emailVerified) {
      Alert.alert('Erro', 'Você deve verificar o seu email para prosseguir.');
    } else {
      NavigationPreloadManager.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      );
    }
  } catch (e) {
    console.log('Erro ao entrar: ' + e.message);
    switch (e.code) {
      case 'auth/user-not-found':
        Alert.alert('Erro', 'Usuário não cadastrado.');
        break;
      case 'auth/wrong-password':
        Alert.alert('Erro', 'Erro na senha.');
        break;
      case 'auth/invalid-email':
        Alert.alert('Erro', 'Usuário desabilitado.');
        break;
      default:
        Alert.alert('Erro', 'Erro desconhecido.');
    }
  }
}
import React, { useState } from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from '../../../Contexts/FormContext';
import { launchImageLibrary } from 'react-native-image-picker';

import {
  UploadButton,
  UploadText,
  Avatar
} from './style'

import {
  FormInput,
  Container,
  Form,
  Title,
  SubTitle,
  NextButon,
  TextButton,
  VoltButton,
  Buttons
} from '../../../../styleGlobal';

const schema = yup.object().shape({
  email: yup.string().email().required("Digite o seu Email"),
  senha: yup.string().required("Digite o sua Senha"),
  apelido: yup.string().max(50)
});


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CadastroCuidador3 = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [apelido, setApelido] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [url, setUrl] = useState(null)


  //   const pickImage = async () => {
  //     // No permissions request is necessary for launching the image library
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });

  //     console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  const { updateFormData } = useFormContext();
  const navigation = useNavigation();

  const handleCadastro3 = () => {
    setFormSubmitted(true);

    schema
      .validate({ email, senha, apelido })
      .then(() => {
        const userData = {
          email,
          senha,
          apelido
        };

        updateFormData(userData);
        navigation.navigate('TesteCorrect');
        console.log('Dados Finais em JSON:', userData);
        setErrors({});
      })
      .catch((error) => {
        setErrors({ [error.path]: error.message });
      });
  }

  const Voltar = () => {
    navigation.navigate('CadastroCuidador2')
  }

  // const udpateFile = () => {
  //   const options = {
  //     noData: true,
  //     mediaType: 'photo'
  //   };

  //   launchImageLibrary(options, response => {
  //     if(response.didCancel){
  //       console.log("Cancelar");
  //     }
  //     else if(response.error){
  //       console.log("Ops parece que deu erro");
  //     }
  //     else{
  //       uploadFileBanco(response)
  //       .then(() => {
  //         uploadAvatar();
  //       })
  //       console.log("URL da foto")
  //       setUrl(response.assets[0].uri)
  //     }
  //   })
  // }

  // const getFileLocalPath = (response) => {
  //     return response.assets[0].uri;
  // }

  // const uploadFileBanco = (response) => {
  //   const fileSource = getFileLocalPath(response);
  //   console.log(fileSource);

  //   //const storageRef = storage().ref('users').child(users?.uid);
  //   //return Storage.putFile(fileSource);
  // }

  // const uploadAvatar = () => {
  //   const storageRef = storage().ref('users').child(users?.uid);
  //   const url = storageRef.getDownloadURL()
  //   .then((image) => {
  //     //atualização do do post desse user
  //     const imagDocs = firestore().collection('posts')
  //   })
  // }



  return (
    <Container>
      <Title> Cadastre-se </Title>
      <SubTitle> Crie uma conta para continuar </SubTitle>
      <Form>

        {/* { url ? (
                  <UploadButton onPress={ () => udpateFile() }>
                    <UploadText>+</UploadText>
                    <Avatar
                      source={{ uri: url}}
                    />
                  </UploadButton>
                ) : (
                  <UploadButton onPress={ () => udpateFile() }>
                    <UploadText>+</UploadText>
                  </UploadButton>
                )} */}



        <FormInput
          style={[(errors.email && formSubmitted) && styles.inputError]}
          placeholder="Digite seu Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email"

        />
        {(errors.email && formSubmitted) && <Text style={styles.labelError}> {errors.email} </Text>}

        <FormInput
          style={[(errors.senha && formSubmitted) && styles.inputError]}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        {(errors.senha && formSubmitted) && <Text style={styles.labelError}> {errors.senha} </Text>}

        <FormInput
          style={[(errors.apelido && formSubmitted) && styles.inputError]}
          placeholder="Digite como quer ser chamado"
          onChangeText={(text) => setApelido(text)}
          value={apelido}
        />
        {(errors.apelido && formSubmitted) && <Text style={styles.labelError}> {errors.apelido} </Text>}

        {/* <Button title='Escolha sua imagem de perfil' onPress={pickImage}   />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}

        <Buttons>
          <VoltButton onPress={Voltar}>
            <TextButton> Voltar </TextButton>
          </VoltButton>

          <NextButon onPress={handleCadastro3}>
            <TextButton> Cadastrar </TextButton>
          </NextButon>
        </Buttons>
      </Form>

    </Container>

  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#2f56b6',
  //   justifyContent: 'center',
  // },
  // form: {
  //   backgroundColor: '#fff',
  //   flex: 1,
  //   borderRadius: 10,
  //   padding: windowWidth * 0.05, // Use uma porcentagem da largura da tela para o padding
  // },
  // titulo: {
  //   fontSize: windowWidth * 0.06, // Use uma porcentagem da largura da tela para o tamanho da fonte
  //   color: '#fff',
  //   textAlign: 'center',
  // },
  // subTitulo: {
  //   fontSize: windowWidth * 0.045, // Use uma porcentagem da largura da tela para o tamanho da fonte
  //   color: '#fff',
  //   marginTop: windowHeight * 0.01, // Use uma porcentagem da altura da tela para a margem superior
  //   textAlign: 'center',
  //   marginBottom: windowHeight * 0.03, // Use uma porcentagem da altura da tela para a margem inferior
  // },
  // input: {
  //   height: windowHeight * 0.05, // Use uma porcentagem da altura da tela para a altura do input
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   marginBottom: windowHeight * 0.01, // Use uma porcentagem da altura da tela para a margem inferior
  //   paddingHorizontal: windowWidth * 0.03, // Use uma porcentagem da largura da tela para o padding horizontal
  // },
  inputError: {
    borderColor: '#ff375b',
  },
  labelError: {
    color: '#ff375b',
    marginBottom: windowHeight * 0.02, // Use uma porcentagem da altura da tela para a margem inferior
  },


});

export default CadastroCuidador3;
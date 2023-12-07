import React, { useState } from "react";
import { StyleSheet, Dimensions, Text } from "react-native";

import * as yup from "yup";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import { useFormContext } from "../../../Contexts/FormContext2";
import { useUser } from "../../../Contexts/UserContext";


import {
  FormInput,
  ContainerP,
  Form,
  TitleP,
  NextButtonP,
  TextButtonP,
} from "../../../../styleGlobal";

const schema = yup.object().shape({
  // medicamento: yup.string().required("Digite o Nome Completo"),
  // quantidade: yup.string().required("Digite a Data de Nascimento").matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Digite uma data válida (dd/mm/yyyy)"),
  // horarios: yup.string().min(11, "Digite corretamente o CPF").max(11, "Digite corretamente o CPF").required("Digite seu CPF"),
  // alergia: yup.string().min(3, "Digite corretamente o tipo sanguíneo").required("Digite o tipo sanguíneo"),
  // temperamento: yup.string().required("Digite a dificuldade da pessoa"),
  // comoLidar: yup.string().required("Digite o nome do responsável pela pessoa"),
});

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CadastroPaciente2 = () => {
  const [medicamento, setMedicamento] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [horarios, setHorarios] = useState("");
  const [alergia, setAlergia] = useState("");
  const [temperamento, setTemperamento] = useState("");
  const [comoLidar, setComoLidar] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { formData } = useFormContext();
  const { userData, submitLogin } = useUser();

  const navigation = useNavigation();

  async function handleSubmit(formData) {
    let body = {
      cpf: formData.cpfP,
      dtNascimento: formData.dataNascP,
      nome: formData.nomeCompP,
      condicao: formData.dificuldade,
      fotoPerfil: "",
      responsavelLegal: formData.responsavel,
      tipoSanguineo: formData.tipoSang,
      temperamento: temperamento,
      interacao: comoLidar,
      cuidador: userData.cuidador.id,
    };
    let headers = {
      "Acces-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };

    try {
      const response = await axios.post("http://oblivio-api.vercel.app/paciente/cad", body, headers);

      if (response.status === 201) {
        try {
          console.log(response.data.id)
          const pacienteId = response.data.id;

          let bodyMed = {
            descricao: medicamento,
            quantidade: quantidade,
            hora: horarios,
            paciente: pacienteId
          }

          let bodyAlergia = {
            descricao: alergia,
            paciente: pacienteId
          }

          const medResponse = await axios.post('https://oblivio-api.vercel.app/remedio/cad', bodyMed, headers)

          const alergResponse = await axios.post('https://oblivio-api.vercel.app/alergia/cad', bodyAlergia, headers)

          console.log(medResponse.data);
          console.log(alergResponse.data);

        } catch (error) {
          console.log('Erro ao cadastrar alergia e remedio', error)
        }
      }

    } catch (error) {
      console.log("Erro ao cadastrar", error);
    }
  }

  const handleCadastroP2 = () => {
    setFormSubmitted(true);

    schema
      .validate({
        medicamento,
        quantidade,
        horarios,
        alergia,
        temperamento,
        comoLidar,
      })
      .then(() => {
        const userData = {
          medicamento,
          quantidade,
          horarios,
          alergia,
          temperamento,
          comoLidar,
        };

        handleSubmit(formData);
        navigation.navigate("TelaInicialWP");

        setErrors({});
      })
      .catch((error) => {
        setErrors({ [error.path]: error.message });
      });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <ContainerP>
      <TitleP> Cadastro de Paciente </TitleP>
      <Form>
        <FormInput
          style={[
            errors.medicamento &&
            formSubmitted &&
            styles.inputError &&
            isFocused,
          ]}
          placeholder="Digite seu medicamento"
          onChangeText={(text) => setMedicamento(text)}
          value={medicamento}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {errors.medicamento && formSubmitted && (
          <Text style={styles.labelError}> {errors.medicamento} </Text>
        )}

        <FormInput
          style={[errors.quantidade && formSubmitted && styles.inputError]}
          placeholder="Digite a quantidade"
          value={quantidade}
          onChangeText={(text) => setQuantidade(text)}
        />
        {errors.quantidade && formSubmitted && (
          <Text style={styles.labelError}> {errors.quantidade} </Text>
        )}

        <FormInput
          style={[
            errors.horarios && formSubmitted && styles.inputError && isFocused,
          ]}
          placeholder="Digite o horario"
          onChangeText={(text) => setHorarios(text)}
          value={horarios}
        />
        {errors.horarios && formSubmitted && (
          <Text style={styles.labelError}> {errors.horarios} </Text>
        )}

        <FormInput
          style={[
            errors.alergia && formSubmitted && styles.inputError && isFocused,
          ]}
          placeholder="Digite a alergia"
          onChangeText={(text) => setAlergia(text)}
          value={alergia}
        />
        {errors.alergia && formSubmitted && (
          <Text style={styles.labelError}> {errors.alergia} </Text>
        )}

        <FormInput
          style={[
            errors.temperamento &&
            formSubmitted &&
            styles.inputError &&
            isFocused,
          ]}
          placeholder="Digite o temperamento"
          onChangeText={(text) => setTemperamento(text)}
          value={temperamento}
        />
        {errors.temperamento && formSubmitted && (
          <Text style={styles.labelError}> {errors.temperamento} </Text>
        )}

        <FormInput
          style={[
            errors.comoLidar && formSubmitted && styles.inputError && isFocused,
          ]}
          placeholder="Digite como podemos lidar com o paciente"
          onChangeText={(text) => setComoLidar(text)}
          value={comoLidar}
        />
        {errors.comoLidar && formSubmitted && (
          <Text style={styles.labelError}> {errors.comoLidar} </Text>
        )}

        <NextButtonP onPress={handleCadastroP2}>
          <TextButtonP> Cadastrar </TextButtonP>
        </NextButtonP>
      </Form>
    </ContainerP>
  );
};

const styles = StyleSheet.create({
  inputError: {
    borderColor: "#ff375b",
  },

  labelError: {
    color: "#ff375b",
    marginBottom: windowHeight * 0.02,
  },
});

export default CadastroPaciente2;

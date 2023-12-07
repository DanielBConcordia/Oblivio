import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useFormContext } from '../../../Contexts/FormContext2';

import {
    FormInput,
    ContainerP,
    Form,
    TitleP,
    NextButtonP,
    TextButtonP
} from '../../../../styleGlobal';

const schema = yup.object().shape({
    nomeCompP: yup.string().required("Digite o Nome Completo"),
    dataNascP: yup.string().required("Digite a Data de Nascimento").matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Digite uma data válida (dd/mm/yyyy)"),
    cpfP: yup.string().min(14, "Digite corretamente o CPF").max(14, "Digite corretamente o CPF").required("Digite seu CPF"),
    tipoSang: yup.string().min(3, "Digite corretamente o tipo sanguíneo").required("Digite o tipo sanguíneo"),
    dificuldade: yup.string().required("Digite a dificuldade da pessoa"),
    responsavel: yup.string().required("Digite o nome do responsável pela pessoa"),
});

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CadastroPaciente = () => {

    const [nomeCompP, setNomeCompP] = useState('');
    const [dataNascP, setDataNascP] = useState('');
    const [cpfP, setCpfP] = useState('');
    const [tipoSang, setTipoSang] = useState('', (value) => updateFormData({ tipoSang: value }));
    const [dificuldade, setDificuldade] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const { updateFormData } = useFormContext();

    const navigation = useNavigation();

    const tipoSangOptions = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
    const tipoSangApiValues = ['A_POSITIVO', 'A_NEGATIVO', 'B_POSITIVO', 'B_NEGATIVO', 'O_POSITIVO', 'O_NEGATIVO', 'AB_POSITIVO', 'AB_NEGATIVO'];


    const handleCadastroP = () => {
        setFormSubmitted(true);

        schema
            .validate({ nomeCompP, dataNascP, cpfP, tipoSang, dificuldade, responsavel })
            .then(() => {
                const formattedDataNascimento = dataNascP.replace(/\//g, '');
                const userData = {
                    nomeCompP,
                    dataNascP,
                    cpfP,
                    tipoSang,
                    dificuldade,
                    responsavel,
                };

                updateFormData(userData);

                navigation.navigate('CadastroPaciente2');
                console.log('Dados Atualizados em JSON:', userData);
                setErrors({});
            })
            .catch((error) => {
                setErrors({ [error.path]: error.message });
            });
    }

    const formatDataNascimento = (text) => {
        let formattedDate = text.replace(/\D/g, '');
        if (formattedDate.length > 2) {
            formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
        }
        if (formattedDate.length > 5) {
            formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5, 9)}`;
        }
        setDataNascP(formattedDate);
    };

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <ContainerP>
            <TitleP> Cadastro de Paciente </TitleP>
            <Form>
                <FormInput
                    style={[(errors.nomeCompP && formSubmitted) && styles.inputError && isFocused]}
                    placeholder="Digite seu Nome Completo"
                    onChangeText={(text) => setNomeCompP(text)}
                    value={nomeCompP}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {(errors.nomeCompP && formSubmitted) && <Text style={styles.labelError}> {errors.nomeCompP} </Text>}

                <FormInput
                    style={[(errors.dataNascP && formSubmitted) && styles.inputError]}
                    placeholder="Digite sua Data de Nascimento"
                    value={dataNascP}
                    onChangeText={(text) => formatDataNascimento(text)}
                    keyboardType="numeric"
                    maxLength={10}
                />
                {(errors.dataNascP && formSubmitted) && <Text style={styles.labelError}> {errors.dataNascP} </Text>}

                <FormInput
                    style={[(errors.cpfP && formSubmitted) && styles.inputError && isFocused]}
                    placeholder="Digite seu CPF"
                    onChangeText={(text) => setCpfP(text)}
                    value={cpfP}
                />
                {(errors.cpfP && formSubmitted) && <Text style={styles.labelError}> {errors.cpfP} </Text>}

                <ModalDropdown
                    options={tipoSangOptions}
                    defaultValue="Selecione o tipo sanguíneo"
                    onSelect={(index, value) => {
                        setTipoSang(tipoSangApiValues[index])
                    }}
                >
                    <FormInput
                        placeholder="Selecione o tipo sanguíneo"
                        value={tipoSangOptions[tipoSangApiValues.indexOf(tipoSang)]}
                        editable={false}
                    />
                </ModalDropdown>
                {(errors.tipoSang && formSubmitted) && <Text style={styles.labelError}> {errors.tipoSang} </Text>}



                <FormInput
                    style={[(errors.dificuldade && formSubmitted) && styles.inputError && isFocused]}
                    placeholder="Digite a dificuldade"
                    onChangeText={(text) => setDificuldade(text)}
                    value={dificuldade}
                />
                {(errors.dificuldade && formSubmitted) && <Text style={styles.labelError}> {errors.dificuldade} </Text>}

                <FormInput
                    style={[(errors.responsavel && formSubmitted) && styles.inputError && isFocused]}
                    placeholder="Digite o nome do responsável"
                    onChangeText={(text) => setResponsavel(text)}
                    value={responsavel}
                />
                {(errors.responsavel && formSubmitted) && <Text style={styles.labelError}> {errors.responsavel} </Text>}

                <NextButtonP onPress={handleCadastroP}>
                    <TextButtonP> Próximo </TextButtonP>
                </NextButtonP>
            </Form>
        </ContainerP>
    );
};

const styles = StyleSheet.create({
    inputError: {
        borderColor: '#ff375b',
    },

    labelError: {
        color: '#ff375b',
        marginBottom: windowHeight * 0.02,
    },
})

export default CadastroPaciente;
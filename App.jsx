import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormProvider } from './src/Contexts/FormContext';
import { FormProvider2 } from './src/Contexts/FormContext2'

import CadastroCuidador from './src/pages/CadastroCuidador/CadCuidador/CadCuidador';
import CadastroCuidador2 from './src/pages/CadastroCuidador/CadCuidador2/CadCuidador2';
import CadastroCuidador3 from './src/pages/CadastroCuidador/CadCuidador3/CadCuidador3';
import TesteCorrect from './src/pages/TesteCorrect/TesteCorrect';
import Login from './src/pages/Login/Login';
import CadastroPaciente from './src/pages/CadastroPaciente/CadPaciente/CadPaciente';
import CadastroPaciente2 from './src/pages/CadastroPaciente/CadPaciente2/CadPaciente2';

import PerfilCuidador from './src/pages/PerfilCuidador/Perfil/PerfilC';
import InfoCuidador from './src/pages/PerfilCuidador/Informacao/InfoCuidador';

import PerfilPaciente from './src/pages/PerfilPaciente/Perfil/PerfilP';
import InfoPaciente from './src/pages/PerfilPaciente/Informacao/InfoPaciente';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
   <FormProvider>
    <FormProvider2>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CadastroCuidador" component={CadastroCuidador} options={{ title: "", headerShown: false }}/>
        <Stack.Screen name="CadastroCuidador2" component={CadastroCuidador2} options={{ title: "", headerShown: false }} />
        <Stack.Screen name="CadastroCuidador3" component={CadastroCuidador3} options={{ title: "", headerShown: false }} />
        <Stack.Screen name="TesteCorrect" component={TesteCorrect} options={{ title: "", headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "", headerShown:false }} />
        <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} options={{ title: "", headerShown:false }} />
        <Stack.Screen name="CadastroPaciente2" component={CadastroPaciente2} options={{ title: "", headerShown:false }} />
        <Stack.Screen name="PerfilCuidador" component={PerfilCuidador} options={{ title: "", headerShown:false }} />
        <Stack.Screen name="InfoCuidador" component={InfoCuidador} options={{ title: "", headerShown:false }} />

        <Stack.Screen name="PerfilPaciente" component={PerfilPaciente} options={{ title: "", headerShown:false }} />
        <Stack.Screen name="InfoPaciente" component={InfoPaciente} options={{ title: "", headerShown:false }} />

      </Stack.Navigator>
    </NavigationContainer>
    </FormProvider2>
   </FormProvider> 
  );
}
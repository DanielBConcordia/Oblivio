import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormProvider } from './src/Contexts/FormContext';

import CadastroCuidador from './src/pages/CadastroCuidador/CadCuidador';
import CadastroCuidador2 from './src/pages/CadastroCuidador/CadCuidador2';
import CadastroCuidador3 from './src/pages/CadastroCuidador/CadCuidador3';
import TesteCorrect from './src/pages/TesteCorrect/TesteCorrect';
import Login from './src/pages/Login/Login';
import TelaInicio from './src/pages/TelaInicio/TelaInicio';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
   <FormProvider>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TelaInicio" component={TelaInicio} options={{ title: "", headerShown: false }}/>
        <Stack.Screen name="CadastroCuidador" component={CadastroCuidador} options={{ title: "", headerShown: false }}/>
        <Stack.Screen name="CadastroCuidador2" component={CadastroCuidador2} options={{ title: "", headerShown: false }} />
        <Stack.Screen name="CadastroCuidador3" component={CadastroCuidador3} options={{ title: "", headerShown: false }} />
        <Stack.Screen name="TesteCorrect" component={TesteCorrect} options={{ title: "", headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "", headerShown:false }} />
      </Stack.Navigator>

    </NavigationContainer>
   </FormProvider> 
  );
}
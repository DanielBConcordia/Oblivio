import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormProvider } from './src/Contexts/FormContext';

import CadastroCuidador from './src/pages/CadastroCuidador/CadCuidador';
import CadastroCuidador2 from './src/pages/CadastroCuidador/CadCuidador2';
import CadastroCuidador3 from './src/pages/CadastroCuidador/CadCuidador3';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
   <FormProvider>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CadastroCuidador" component={CadastroCuidador} />
        <Stack.Screen name="CadastroCuidador2" component={CadastroCuidador2} />
        <Stack.Screen name="CadastroCuidador3" component={CadastroCuidador3} />
      </Stack.Navigator>
    </NavigationContainer>
   </FormProvider> 
  );
}
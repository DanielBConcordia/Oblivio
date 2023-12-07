import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/* Providers */ }
import { FormProvider } from './src/Contexts/FormContext';
import { FormProvider2 } from './src/Contexts/FormContext2';
import { UserProvider } from './src/Contexts/UserContext';

{/* Cadastro Cuidador */ }
import CadastroCuidador from './src/pages/CadastroCuidador/CadCuidador/CadCuidador';
import CadastroCuidador2 from './src/pages/CadastroCuidador/CadCuidador2/CadCuidador2';
import CadastroCuidador3 from './src/pages/CadastroCuidador/CadCuidador3/CadCuidador3';

{/* Login */ }
import Login from './src/pages/Login/Login';

{/* Cadastro Paciente */ }
import CadastroPaciente from './src/pages/CadastroPaciente/CadPaciente/CadPaciente';
import CadastroPaciente2 from './src/pages/CadastroPaciente/CadPaciente2/CadPaciente2';

{/* Tela Inicial */ }
import TelaInicial from './src/pages/TelaInicial/TelaInicial';

{/* Tela inicial com paciente */ }
import TelaInicialWP from './src/pages/TelaInicialWP/TelaInicialWP';

{/* Tela de Menu */ }
import Menu from './src/pages/Menu/Menu';

{ /* Pagina Principal */ }
import PaginaPrincipal from './src/pages/PaginaPrincipal/PaginaPrincipal';

{ /* Informações do cuidador */ }
import InfoCuidador from './src/pages/PerfilCuidador/Informacao/InfoCuidador';

{/* Perfil do cuidador */ }
import PerfilCuidador from './src/pages/PerfilCuidador/Perfil/PerfilC';

{/* Lista de Pacientes */ }
import ListPaciente from './src/pages/ListPaciente/ListPaciente';

{/* Informações do paciente */ }
import InfoPaciente from './src/pages/PerfilPaciente/Informacao/InfoPaciente';

{/* Perfil do pacinete */ }
import PerfilPaciente from './src/pages/PerfilPaciente/Perfil/PerfilP';

{/* Lista de cuidadores */ }
import ListCuidadores from './src/pages/ListCuidadores/ListCuidadores';

{/* Página do qr code */ }
import QrCodePage from './src/pages/QrCodePage/QrCodePage'

{/* Info page qr code */ }
import PatientInfoPage from './src/pages/QrCodePage/PatientInfoPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <FormProvider>
      <FormProvider2>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator>

              {/* Pagina Principal */}

              <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} options={{ title: "", headerShown: false }} />

              {/* Cadastro Cuidador */}

              <Stack.Screen name="CadastroCuidador" component={CadastroCuidador} options={{ title: "", headerShown: false }} />
              <Stack.Screen name="CadastroCuidador2" component={CadastroCuidador2} options={{ title: "", headerShown: false }} />
              <Stack.Screen name="CadastroCuidador3" component={CadastroCuidador3} options={{ title: "", headerShown: false }} />

              {/* Tela Inicial */}

              <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: "", headerShown: false }} />

              {/* Login */}

              <Stack.Screen name="Login" component={Login} options={{ title: "", headerShown: false }} />

              {/* Cadastro Paciente */}

              <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} options={{ title: "", headerShown: false }} />
              <Stack.Screen name="CadastroPaciente2" component={CadastroPaciente2} options={{ title: "", headerShown: false }} />

              {/* Tela incial com paciente */}

              <Stack.Screen name="TelaInicialWP" component={TelaInicialWP} options={{ title: "", headerShown: false }} />

              {/* Tela de Menu */}

              <Stack.Screen name="Menu" component={Menu} options={{ title: "", headerShown: false }} />

              {/* Informções do Cuidador */}

              <Stack.Screen name="InfoCuidador" component={InfoCuidador} options={{ title: "", headerShown: false }} />

              {/* Perfil Cuidador */}

              <Stack.Screen name="PerfilCuidador" component={PerfilCuidador} options={{ title: "", headerShown: false }} />

              {/* Lista de Pacientes */}

              <Stack.Screen name="ListPaciente" component={ListPaciente} options={{ title: "", headerShown: false }} />

              {/* Informações do paciente */}

              <Stack.Screen name="InfoPaciente" component={InfoPaciente} options={{ title: "", headerShown: false }} />

              {/* Perfil do paciente */}

              <Stack.Screen name="PerfilPaciente" component={PerfilPaciente} options={{ title: "", headerShown: false }} />

              {/* Lista de Cuidadores */}

              <Stack.Screen name="ListCuidadores" component={ListCuidadores} options={{ title: "", headerShown: false }} />

              {/* Página do qrCode */}

              <Stack.Screen name="QrCodePage" component={QrCodePage} options={{ title: "", headerShown: false }} />

              {/* Patient info Page */}

              <Stack.Screen name="PatientInfoPage" component={PatientInfoPage} options={{ title: "", headerShown: false }} />

            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </FormProvider2>
    </FormProvider>
  );
}
import {Text, Button, View } from "react-native";
import { enviarValidacao } from "../../utils/validacaoEmail/enviarValidacao";

const validacaoEmail = () => {

   
    return(
        <View>
            <Text> Clique no botão após realizar a validação</Text>
            <Button title="verificar" onPress={}></Button>
        </View>
    )
}

export default validacaoEmail;
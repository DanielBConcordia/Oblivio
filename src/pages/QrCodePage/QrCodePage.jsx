// QRCodePage.js
import React from 'react';
import { View, Linking } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Contexts/UserContext';

const QRCodePage = () => {
    const navigation = useNavigation();
    const { pacienteSelecionado } = useUser();
    const pacienteId = pacienteSelecionado.id;

    const handleScan = () => {
        // Construa a URL com o ID do paciente
        const webURL = `https://web-oblivio.vercel.app/paciente/${pacienteId}`;

        // Abra a URL no navegador externo
        Linking.openURL(webURL);
    };

    const generateQRCodeData = () => {
        return pacienteId;
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <QRCode value={generateQRCodeData()} />
            <QRCodeScanner onRead={handleScan} />
        </View>
    );
};

export default QRCodePage;

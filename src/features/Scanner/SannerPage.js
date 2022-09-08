import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ModalDialog from '../../shared/components/ModalDialog';


const ScannerPage = () => {
        const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);
        const [dataQR, setDataQR] = useState('');

        useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
        }, []);

        const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        console.log(data);
        setDataQR(data)
        };

        if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
        }
        if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
        

        return (
        <View style={styles.container}>
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
            {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
            {scanned && <ModalDialog data={dataQR} visible onPress={() => setScanned(false)}/>}
        </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        },
    })


export default ScannerPage
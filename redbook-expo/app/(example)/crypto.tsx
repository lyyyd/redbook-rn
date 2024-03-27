import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Crypto from 'expo-crypto';

export default function App() {
    useEffect(() => {
        (async () => {
            const digest = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                'GitHub stars are neat 🌟'
            );
            console.log('Digest: ', digest);
            /* Some crypto operation... */
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Crypto Module Example</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// 文件选择 documentPicker
import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as DocumentPicker from 'expo-document-picker';
import { useEffect } from 'react';

export default function TabTwoScreen() {
    // DocumentPicker.getDocumentAsync
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result);
    };
    useEffect(() => {
        pickDocument();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>document picker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

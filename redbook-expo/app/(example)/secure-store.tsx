// securestore
// 一个库，提供一种在设备本地加密和安全存储键值对的方法。
// expo - secure - store提供了一种在设备本地加密和安全存储键值对的方法。每个Expo项目都有独立的存储系统，无法访问其他Expo项目的存储。
// 值的大小限制为 2048 字节。尝试存储更大的值可能会失败。目前，当达到限制时，我们会打印一条警告，但是，在未来的 SDK 版本中可能会引发错误。
// requireAuthentication当由于缺少密钥而可用生物识别身份验证时，Expo Go 不支持该选项NSFaceIDUsageDescription。

import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        alert("🔐 Here's your value 🔐 \n" + result);
    } else {
        alert('No values stored under that key.');
    }
}

export default function App() {
    const [key, onChangeKey] = React.useState('Your key here');
    const [value, onChangeValue] = React.useState('Your value here');

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Save an item, and grab it later!</Text>
            { }

            <TextInput
                style={styles.textInput}
                clearTextOnFocus
                onChangeText={text => onChangeKey(text)}
                value={key}
            />
            <TextInput
                style={styles.textInput}
                clearTextOnFocus
                onChangeText={text => onChangeValue(text)}
                value={value}
            />
            { }
            <Button
                title="Save this key/value pair"
                onPress={() => {
                    save(key, value);
                    onChangeKey('Your key here');
                    onChangeValue('Your value here');
                }}
            />
            <Text style={styles.paragraph}>🔐 Enter your key 🔐</Text>
            <TextInput
                style={styles.textInput}
                onSubmitEditing={event => {
                    getValueFor(event.nativeEvent.text);
                }}
                placeholder="Enter the key for the value you want to get"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        marginTop: 34,
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 0.5,
        padding: 4,
    },
});
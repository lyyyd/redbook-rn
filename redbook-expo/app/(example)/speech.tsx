// speech
// 提供对文本转语音功能的访问的库。

// expo - speech提供了一个 API，允许您在应用程序中使用文本转语音功能。

import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
    const speak = () => {
        const thingToSay = 'Press to hear some words!';
        Speech.speak(thingToSay);
    };

    return (
        <View style={styles.container}>
            <Button title="Press to hear some words" onPress={speak} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});

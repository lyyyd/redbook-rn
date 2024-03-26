// 粘贴板
// 一个通用库，允许获取和设置剪贴板内容。
// expo-clipboard提供用于在 Android、iOS 和 Web 上获取和设置剪贴板内容的界面。

import * as React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

export default function App() {
    const [copiedText, setCopiedText] = useState('');
    const [copiedUrl, setCopiedUrl] = useState('');
    const [copiedImage, setCopiedImage] = useState(''); // [1

    // getStringAsync()
    // setStringAsync()
    // hasStringAsync()
    // setString()
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync('hello world');
    };
    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };

    // getUrlAsync()
    // setUrlAsync()
    // hasUrlAsync()
    const copyUrlToClipboard = async () => {
        await Clipboard.setUrlAsync('https://expo.dev');
    };
    const fetchCopiedUrl = async () => {
        const url = await Clipboard.getUrlAsync();
        setCopiedUrl(url);
    };


    // getImageAsync()
    // hasImageAsync()
    // setImageAsync()
    const copyImageToClipboard = async () => {
        const result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
        });
        await Clipboard.setImageAsync(result.base64);
    };
    const fetchCopiedImage = async () => {
        const image = await Clipboard.getImageAsync({ format: 'png' });
        setCopiedImage(image);
    };

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text>String</Text>
                    <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
                    <Button title="View copied text" onPress={fetchCopiedText} />
                    <Text style={styles.copiedText}>{copiedText}</Text>

                    <Text>URL</Text>
                    <Button title="Click here to copy URL to Clipboard" onPress={copyUrlToClipboard} />
                    <Button title="View copied URL" onPress={fetchCopiedUrl} />
                    <Text style={styles.copiedText}>{copiedUrl}</Text>

                    <Text>Image</Text>
                    <Button title="Click here to copy image to Clipboard" onPress={copyImageToClipboard} />
                    <Button title="View copied image" onPress={fetchCopiedImage} />
                    <Text style={styles.copiedText}>{copiedImage}</Text>
                    <Image source={{ uri: copiedImage?.data }} style={{ width: 200, height: 200 }} />
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    copiedText: {
        marginTop: 10,
        color: 'red',
    },
});

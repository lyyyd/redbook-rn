// 亮度
// 提供对 API 的访问以获取和设置屏幕亮度的库。
// 用于获取和设置屏幕亮度的 API。
// 在 Android 上，有一个全局系统范围的亮度设置，每个应用程序都有自己的亮度设置，可以选择覆盖全局设置。
// 可以使用此 API 设置这些值中的任何一个。在 iOS 上，无法以编程方式更改系统亮度设置；相反，对屏幕亮度的任何更改都将持续存在，直到设备锁定或关闭。
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function App() {
    const [brightness, setBrightness] = React.useState(0);
    useEffect(() => {
        (async () => {
            const { status } = await Brightness.requestPermissionsAsync();
            if (status === 'granted') {
                Brightness.setSystemBrightnessAsync(1);
            }
        })();
    }, []);
    /**
     * 获取设备主屏幕的当前亮度级别
     */
    const getBrightness = async () => {
        const brightness = await Brightness.getSystemBrightnessAsync();
        console.log({ brightness });
        return brightness;
    }

    useEffect(() => {
        getBrightness().then((brightness) => {
            setBrightness(brightness);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Brightness Module Example</Text>
            <Text>屏幕亮度级别: {brightness}</Text>
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

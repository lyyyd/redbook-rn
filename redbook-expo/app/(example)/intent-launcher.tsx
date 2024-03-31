// intent-launcher
// 提供 API 来启动 Android 意图的库。
// expo - intent - launcher提供了一种启动 Android 意图的方法。例如，您可以使用此 API 打开特定的设置屏幕。

import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';
import { useEffect } from 'react';


export default function TabTwoScreen() {

    const openSettings = async () => {
        // Open location settings
        await startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>intent-launcher</Text>

            <TouchableOpacity style={styles.btn} onPress={() => {
                openSettings();
            }}>
                <Text style={styles.tabTxtSelected}>
                    打开位置设置页面
                </Text>
            </TouchableOpacity>
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
    btn: {
        width: 100,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#006adc",
        borderRadius: 10,
        margin: 10,
    },
    tabTxtSelected: {
        fontSize: 16,
        color: "#fff",
    },
});

// system - ui
// 允许与系统 UI 元素交互的库。

// expo - system - ui使您能够与 React 树之外的 UI 元素进行交互。特别是根视图背景颜色，并在 Android 上全局锁定用户界面样式。

import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as SystemUI from 'expo-system-ui';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function TabTwoScreen() {
    const getBackgroundColor = async () => {
        const color = await SystemUI.getBackgroundColorAsync();
        console.log('color', color);
    }
    const setBackgroundColor = async () => {
        SystemUI.setBackgroundColorAsync("tomato"); // #ff6347
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>system-ui</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                setBackgroundColor()
            }}>
                <Text style={styles.tabTxtSelected}>
                    setBackgroundColor
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
                getBackgroundColor()
            }}>
                <Text style={styles.tabTxtSelected}>
                    getBackgroundColor
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
        width: 150,
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

// status - bar
// 一个库，提供与 React Native StatusBar API 相同的界面，但默认值略有不同，可以在 Expo 环境中很好地工作。

// expo - status - bar为您提供一个组件和命令式界面来控制应用程序状态栏以更改其文本颜色、背景颜色、隐藏它、使其半透明或不透明，并将动画应用于任何这些更改。您能够使用该组件执行哪些操作StatusBar取决于您所使用的平台。

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }}>Notice that the status bar has light text!</Text>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

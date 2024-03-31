// font
// 一个允许在运行时加载字体并在 React Native 组件中使用它们的库。
// expo - font允许从网络加载字体并在 React Native 组件中使用它们。请参阅字体指南中更详细的使用信息。

import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'Inter-Black': require('@/assets/fonts/Inter-Black.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
            <Text style={{ fontSize: 30 }}>Platform Default</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// 应用信息
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Application from 'expo-application';

export default function App() {
    const [lastUpdateTimeAsync, setLastUpdateTimeAsync] = useState<Date>();
    const [installationTimeAsync, setInstallationTimeAsync] = useState<Date>();

    const _applicationId = () => Application.applicationId
    const _applicationName = () => Application.applicationName
    const _nativeApplicationVersion = () => Application.nativeApplicationVersion
    const _nativeBuildVersion = () => Application.nativeBuildVersion

    const _lastUpdateTimeAsync = async () => {
        const lastUpdateTimeAsync = await Application.getLastUpdateTimeAsync();
        setLastUpdateTimeAsync(lastUpdateTimeAsync);
    }


    const _installationTimeAsync = async () => {
        const installationTimeAsync = await Application.getInstallationTimeAsync();
        setInstallationTimeAsync(installationTimeAsync);
    }

    useEffect(() => {
        _lastUpdateTimeAsync();
        _installationTimeAsync();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
            <Text style={styles.text}>应用ID: {_applicationId()}</Text>
            <Text style={styles.text}>应用名称: {_applicationName()}</Text>
            <Text style={styles.text}>应用版本: {_nativeApplicationVersion()}</Text>
            <Text style={styles.text}>应用构建版本: {_nativeBuildVersion()}</Text>

            <Text style={styles.text}>获取应用程序上次从 Google Play 商店更新的时间。(Android): {lastUpdateTimeAsync?.toString()}</Text>
            <Text style={styles.text}>获取应用程序安装到设备上的时间，不包括后续更新。如果卸载并重新安装应用程序，此方法将返回重新安装应用程序的时间。(Android、IOS): {installationTimeAsync?.toString()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
    },
});

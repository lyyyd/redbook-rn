// task - manager
// 为可以在后台运行的任务提供支持的库。

// expo - task - manager提供了一个API，允许您管理长时间运行的任务，特别是那些可以在您的应用程序在后台运行时运行的任务。该模块的一些功能被其他模块使用。以下是使用 TaskManager 的 Expo 模块列表：
// 地点
// 背景获取
// 通知

import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

const requestPermissions = async () => {
    const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    if (foregroundStatus === 'granted') {
        const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
        if (backgroundStatus === 'granted') {
            await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                accuracy: Location.Accuracy.Balanced,
            });
        }
    }
};

const PermissionsButton = () => (
    <View style={styles.container}>
        <Button onPress={requestPermissions} title="Enable background location" />
    </View>
);

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
        // Error occurred - check `error.message` for more details.
        return;
    }
    if (data) {
        const { locations } = data;
        // do something with the locations captured in the background
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PermissionsButton;

// tracking - transparency
// 一个库，用于请求跟踪使用 iOS 14 及更高版本的设备上的用户的权限。

// 用于请求跟踪用户或其设备的权限的库。用于跟踪的数据示例包括电子邮件地址、设备 ID、广告 ID 等。仅在 iOS 14 及更高版本上需要此权限；在 iOS 13 及更低版本上，始终授予此权限。如果“允许应用程序请求跟踪”设备级别设置处于关闭状态，则此权限将被拒绝。请务必添加NSUserTrackingUsageDescription到您的Info.plist以解释如何跟踪用户。否则，你的应用程序将被苹果拒绝。

// 有关 Apple 新的应用程序跟踪透明度框架的更多信息，请参阅其文档。

import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

export default function App() {
    useEffect(() => {
        (async () => {
            const { status } = await requestTrackingPermissionsAsync();
            if (status === 'granted') {
                console.log('Yay! I have user permission to track data');
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Tracking Transparency Module Example</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

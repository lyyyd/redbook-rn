// screen - capture
// 一个库，可让您保护应用程序中的屏幕不被捕获或记录。
// expo - screen - capture允许您保护应用程序中的屏幕不被捕获或记录，并在应用程序处于前台时截取屏幕截图时收到通知。您可能想要阻止屏幕捕获的两个最常见原因是：
// 如果屏幕显示敏感信息（密码、信用卡数据等）
// 您正在显示您不希望被记录和共享的付费内容
// 这在 Android 上尤其重要，因为android.media.projectionAPI 允许第三方应用程序执行屏幕捕获或屏幕共享（即使应用程序位于后台）。
// 目前，iOS 上的截图是无法阻止的。这是由于底层操作系统的限制。

import { usePreventScreenCapture } from 'expo-screen-capture';
import React from 'react';
import { Text, View } from 'react-native';

export default function ScreenCaptureExample() {
    usePreventScreenCapture();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>As long as this component is mounted, this screen is unrecordable!</Text>
        </View>
    );
}

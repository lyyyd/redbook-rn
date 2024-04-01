// url
// 标准 URL API 可在所有 Expo 支持的平台上使用。

// 标准 URL API 可在所有 Expo 支持的平台上使用。


import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect } from 'react';

export default function TabTwoScreen() {
    useEffect(() => {
        // 一致性
        // Expo 的内置 URL 支持试图完全符合规范。
        // 唯一缺少的例外是本机平台当前不支持主机名中的非 ASCII 字符。

        // 输出如下：

        // 网络、Node.js：http://xn--pr9h/
        // 安卓、iOS：http://🥓/
        const url = new URL('http://🥓');
        const params = new URLSearchParams();
        console.log('url', url);
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>url</Text>
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
});

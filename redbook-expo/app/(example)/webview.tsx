// webview
// 提供 WebView 组件的库。

// react - native - webview提供WebView在本机视图中呈现 Web 内容的组件。

import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function App() {
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'https://www.baidu.com' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});

// view - pager
// 一个组件库，提供类似轮播的视图来滑动内容页面。

// 该库列在 Expo SDK 参考中，因为它包含在Expo Go中。您可以在开发构建中使用您选择的任何库。
// react - native - pager - view公开一个组件，该组件提供布局和手势以在内容页面之间滚动，例如轮播。

import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function MyPager() {
    return (
        <View style={styles.container}>
            <PagerView style={styles.container} initialPage={0}>
                <View style={styles.page} key="1">
                    <Text>First page</Text>
                    <Text>Swipe ➡️</Text>
                </View>
                <View style={styles.page} key="2">
                    <Text>Second page</Text>
                </View>
                <View style={styles.page} key="3">
                    <Text>Third page</Text>
                </View>
            </PagerView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
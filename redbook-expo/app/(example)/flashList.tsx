// flashList
// https://github.com/shopify/flash-list
// 一个 React Native 组件，提供快速且高性能的方式来呈现列表。

// 该库列在 Expo SDK 参考中，因为它包含在Expo Go中。您可以在开发构建中使用您选择的任何库。
// @shopify/flash-list是一个“快速且高性能的 React Native 列表”组件，它是 React Native 组件的直接替代品<FlatList>。它“在引擎盖下回收组件以最大限度地提高性能”。

import React from "react";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {

    const DATA = [
        {
            title: "First Item",
        },
        {
            title: "Second Item",
        },
    ];

    const MyList = () => {
        return (
            <FlashList
                data={DATA}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                estimatedItemSize={200}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>flash list</Text>
            <MyList />
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

// flashList
// https://github.com/shopify/flash-list
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

// 联系方式

// 提供对手机系统联系人的访问的库。
// expo-contacts提供对设备系统联系人的访问，允许您获取联系人信息以及添加、编辑或删除联系人。
// 在 iOS 上，联系人有一个多层分组系统，您也可以通过此 API 访问该系统。

import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                });

                if (data.length > 0) {
                    const contact = data;
                    console.log(contact);
                }
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Contacts Module Example</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

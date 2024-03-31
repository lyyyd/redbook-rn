// mail - composer
// 一个库，提供使用系统特定 UI 撰写和发送电子邮件的功能。
// expo - mail - composer允许您使用操作系统 UI 快速轻松地撰写和发送电子邮件。该模块无法在 iOS 模拟器上使用，因为您无法登录其中的邮件帐户。

import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as MailComposer from 'expo-mail-composer';

export default function TabTwoScreen() {
    // MailComposer.composeAsync
    // 使用系统 UI 打开电子邮件撰写器。
    const openMail = async () => {
        await MailComposer.composeAsync({
            recipients: [''],
            subject: 'Hello from Expo',
            body: 'This is the body of an email from Expo',
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                openMail()
            }}>
                <Text style={styles.tabTxtSelected}>
                    magnetometer
                </Text>
            </TouchableOpacity>
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
    btn: {
        width: 100,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#006adc",
        borderRadius: 10,
        margin: 10,
    },
    tabTxtSelected: {
        fontSize: 16,
        color: "#fff",
    },
});

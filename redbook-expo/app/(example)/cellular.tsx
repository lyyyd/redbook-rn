// 蜂窝服务
// 提供有关用户的蜂窝服务提供商信息的 API。
// expo-cellular提供有关用户的蜂窝服务提供商的信息，例如其唯一标识符、蜂窝连接类型以及是否允许在其网络上进行 VoIP 呼叫。

import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as Cellular from 'expo-cellular';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
    const [carrierName, setCarrierName] = useState<string | null>(null);
    const [cellularGeneration, setCellularGeneration] = useState<string | null>(null);
    const [isoCountryCode, setIsoCountryCode] = useState<string | null>(null);
    const [mobileCountryCode, setMobileCountryCode] = useState<string | null>(null);
    const [mobileNetworkCode, setMobileNetworkCode] = useState<string | null>(null);
    const [permissions, setPermissions] = useState<string | null>(null);
    const isAllowsVoip = async () => {
        const allowsVoip = await Cellular.allowsVoipAsync()
        console.log({ allowsVoip });
        return allowsVoip;
    }
    useEffect(() => {
        (async () => {
            // Cellular.getCarrierNameAsync()
            const carrierName = await Cellular.getCarrierNameAsync();
            setCarrierName(carrierName);

            // Cellular.getCellularGenerationAsync()
            const cellularGeneration = await Cellular.getCellularGenerationAsync();
            setCellularGeneration(cellularGeneration);

            // Cellular.getIsoCountryCodeAsync()
            const isoCountryCode = await Cellular.getIsoCountryCodeAsync();
            setIsoCountryCode(isoCountryCode);

            // Cellular.getMobileCountryCodeAsync()
            const mobileCountryCode = await Cellular.getMobileCountryCodeAsync();
            setMobileCountryCode(mobileCountryCode);

            // Cellular.getMobileNetworkCodeAsync()
            const mobileNetworkCode = await Cellular.getMobileNetworkCodeAsync();
            setMobileNetworkCode(mobileNetworkCode);

            // Cellular.getPermissionsAsync()
            const permissions = await Cellular.getPermissionsAsync();
            console.log(permissions);
            setPermissions(permissions);

            // Cellular.requestPermissionsAsync()
            const status = await Cellular.requestPermissionsAsync();
            console.log(status);

        })()
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>蜂窝网络</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                isAllowsVoip();
            }}>
                <Text style={styles.tabTxtSelected}>
                    isAllowsVoip
                </Text>
            </TouchableOpacity>
            <Text>家庭蜂窝服务提供商的名称: {carrierName}</Text>
            <Text>当前蜂窝生成类型的枚举值: {cellularGeneration}----{cellularGeneration?.toString() == '3' ? '当前已连接至 4G 蜂窝网络。包括 HSPAP 和 LTE 类型连接。' : ''}</Text>
            <Text>ISO 国家代码: {isoCountryCode}</Text>
            <Text>移动国家代码: {mobileCountryCode}</Text>
            <Text>移动网络代码: {mobileNetworkCode}</Text>

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

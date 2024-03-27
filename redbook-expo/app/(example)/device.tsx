// 设备 device
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as Device from 'expo-device';

export default function TabTwoScreen() {
    const brand = Device.brand
    const designName = Device.designName
    const deviceName = Device.deviceName
    const deviceType = Device.deviceType
    const deviceYearClass = Device.deviceYearClass
    const isDevice = Device.isDevice
    const modelName = Device.modelName
    const modelId = Device.modelId
    const osBuildFingerprint = Device.osBuildFingerprint
    const osBuildId = Device.osBuildId
    const osInternalBuildId = Device.osInternalBuildId
    const osName = Device.osName
    const osVersion = Device.osVersion
    const platformApiLevel = Device.platformApiLevel
    const productName = Device.productName
    const supportedCpuArchitectures = Device.supportedCpuArchitectures
    const totalMemory = Device.totalMemory

    return (
        <View style={styles.container}>
            <Text style={styles.title}>brand: {brand}</Text>
            <Text style={styles.title}>designName: {designName}</Text>
            <Text style={styles.title}>deviceName: {deviceName}</Text>
            <Text style={styles.title}>deviceType: {deviceType}</Text>
            <Text style={styles.title}>deviceYearClass: {deviceYearClass}</Text>
            <Text style={styles.title}>isDevice: {isDevice}</Text>
            <Text style={styles.title}>modelName: {modelName}</Text>
            <Text style={styles.title}>modelId: {modelId}</Text>
            <Text style={styles.title}>osBuildFingerprint: {osBuildFingerprint}</Text>
            <Text style={styles.title}>osBuildId: {osBuildId}</Text>
            <Text style={styles.title}>osInternalBuildId: {osInternalBuildId}</Text>
            <Text style={styles.title}>osName: {osName}</Text>
            <Text style={styles.title}>osVersion: {osVersion}</Text>
            <Text style={styles.title}>platformApiLevel: {platformApiLevel}</Text>
            <Text style={styles.title}>productName: {productName}</Text>
            <Text style={styles.title}>supportedCpuArchitectures: {supportedCpuArchitectures}</Text>
            <Text style={styles.title}>totalMemory: {totalMemory}</Text>
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

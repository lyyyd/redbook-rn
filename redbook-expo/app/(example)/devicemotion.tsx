// 加速度计
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer, DeviceMotionMeasurement } from 'expo-sensors';
import type { Subscription } from 'expo-sensors/build/DeviceSensor';
import { DeviceMotion } from 'expo-sensors';

export default function App() {
    const [acceleration, setAcceleration] = useState<null | {
        x: number,
        y: number,
        z: number
    }>({ x: 0, y: 0, z: 0 } || null);
    const [accelerationIncludingGravity, setAccelerationIncludingGravity] = useState<null | {
        x: number,
        y: number,
        z: number
    }>({ x: 0, y: 0, z: 0 } || null);
    // interval: number;
    const [interval, setInterval] = useState<number>(0);
    // orientation: DeviceMotionOrientation;
    const [orientation, setOrientation] = useState<number>();

    const [subscription, setSubscription] = useState<Subscription | null>(null);
    // rotation: { alpha: number; beta: number; gamma: number; };
    const [rotation, setRotation] = useState<null | {
        alpha: number,
        beta: number,
        gamma: number
    }>({ alpha: 0, beta: 0, gamma: 0 } || null);
    // rotationRate: { alpha: number; beta: number; gamma: number; };
    const [rotationRate, setRotationRate] = useState<null | {
        alpha: number,
        beta: number,
        gamma: number
    }>({ alpha: 0, beta: 0, gamma: 0 } || null);

    // const _slow = () => Accelerometer.setUpdateInterval(1000);
    // const _fast = () => Accelerometer.setUpdateInterval(16);


    const _subscribe = () => {
        setSubscription(DeviceMotion.addListener((event: DeviceMotionMeasurement) => {
            // console.log('event.orientation', event.orientation);
            setAcceleration(event.acceleration);
            setAccelerationIncludingGravity(event.accelerationIncludingGravity);
            setInterval(event.interval);
            setOrientation(event.orientation);
            setRotation(event.rotation);
            setRotationRate(event.rotationRate);
        }));
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
            <Text style={styles.text}>acceleration</Text>
            <Text style={styles.text}>x: {acceleration?.x}</Text>
            <Text style={styles.text}>y: {acceleration?.y}</Text>
            <Text style={styles.text}>z: {acceleration?.z}</Text>
            <Text style={styles.text}>accelerationIncludingGravity</Text>
            <Text style={styles.text}>x: {accelerationIncludingGravity?.x}</Text>
            <Text style={styles.text}>y: {accelerationIncludingGravity?.y}</Text>
            <Text style={styles.text}>z: {accelerationIncludingGravity?.z}</Text>
            <Text style={styles.text}>interval</Text>
            <Text style={styles.text}>{interval}</Text>
            <Text style={styles.text}>orientation</Text>
            <Text style={styles.text}>{JSON.stringify(orientation)}</Text>
            <Text style={styles.text}>rotation</Text>
            <Text style={styles.text}>alpha: {rotation?.alpha}</Text>
            <Text style={styles.text}>beta: {rotation?.beta}</Text>
            <Text style={styles.text}>gamma: {rotation?.gamma}</Text>
            <Text style={styles.text}>rotationRate</Text>
            <Text style={styles.text}>alpha: {rotationRate?.alpha}</Text>
            <Text style={styles.text}>beta: {rotationRate?.beta}</Text>
            <Text style={styles.text}>gamma: {rotationRate?.gamma}</Text>
            {/* <Text>{data}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
    },
    middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
});

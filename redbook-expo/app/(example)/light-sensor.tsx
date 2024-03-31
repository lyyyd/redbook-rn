// light-sensor
// 提供对设备光传感器的访问的库。
// LightSensorfromexpo - sensors提供对设备光传感器的访问以响应照度变化。
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { LightSensor } from 'expo-sensors';
import { Subscription } from 'expo-battery';

export default function App() {
    const [{ illuminance }, setData] = useState({ illuminance: 0 });
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        _toggle();

        return () => {
            _unsubscribe();
        };
    }, []);

    const _toggle = () => {
        if (subscription) {
            _unsubscribe();
        } else {
            _subscribe();
        }
    };

    const _subscribe = () => {
        setSubscription(LightSensor.addListener(setData))
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null)
    };

    return (
        <View style={styles.sensor}>
            <Text>Light Sensor:</Text>
            <Text>
                Illuminance: {Platform.OS === 'android' ? `${illuminance} lx` : `Only available on Android`}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={_toggle} style={styles.button}>
                    <Text>Toggle</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    sensor: {
        marginTop: 45,
        paddingHorizontal: 10,
    },
});

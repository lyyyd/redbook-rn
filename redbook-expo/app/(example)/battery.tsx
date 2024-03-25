// 电池
// 提供物理设备电池信息以及相应事件侦听器的库。
import { useBatteryLevel, useLowPowerMode, usePowerState } from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const batteryLevel = useBatteryLevel();
  const isLowPower = useLowPowerMode();
  const powerState = usePowerState();

  return (
    <View style={styles.container}>
      <Text>Current Battery Level: {batteryLevel}</Text>
      <Text>是否处于低功耗模式: {isLowPower.toString()}</Text>
      <Text>电源状态信息: {JSON.stringify(powerState)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

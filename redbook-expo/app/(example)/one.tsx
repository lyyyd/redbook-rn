import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Tab One</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/index.tsx" />

          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/camera');
            // router.push("/one");
          }}>
            <Text style={styles.tabTxtSelected}>
              相机
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/accelerometer');
          }}>
            <Text style={styles.tabTxtSelected}>
              加速度计
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/applicationInfo');
          }}>
            <Text style={styles.tabTxtSelected}>
              应用信息
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/av');
          }}>
            <Text style={styles.tabTxtSelected}>
              音视频AV频播放
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/recordEasy');
          }}>
            <Text style={styles.tabTxtSelected}>
              录音 easy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/record');
          }}>
            <Text style={styles.tabTxtSelected}>
              录音
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/backgroundFetch');
          }}>
            <Text style={styles.tabTxtSelected}>
              后台任务
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/barometer');
          }}>
            <Text style={styles.tabTxtSelected}>
              气压
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/battery');
          }}>
            <Text style={styles.tabTxtSelected}>
              电池
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/blurView');
          }}>
            <Text style={styles.tabTxtSelected}>
              模糊视图
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/brightness');
          }}>
            <Text style={styles.tabTxtSelected}>
              屏幕亮度
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/calendar');
          }}>
            <Text style={styles.tabTxtSelected}>
              日历
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/captureRef');
          }}>
            <Text style={styles.tabTxtSelected}>
              组件截图
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            router.push('/cellular');
          }}>
            <Text style={styles.tabTxtSelected}>
              蜂窝网络
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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

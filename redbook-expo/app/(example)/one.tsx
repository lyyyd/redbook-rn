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

          <View style={styles.btnContainer}>
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
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/checkbox');
            }}>
              <Text style={styles.tabTxtSelected}>
                复选框
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/clipboard');
            }}>
              <Text style={styles.tabTxtSelected}>
                粘贴板
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/contacts');
            }}>
              <Text style={styles.tabTxtSelected}>
                联系方式
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/crypto');
            }}>
              <Text style={styles.tabTxtSelected}>
                加密 crypto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/dateTimePicker');
            }}>
              <Text style={styles.tabTxtSelected}>
                日期选择
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/device');
            }}>
              <Text style={styles.tabTxtSelected}>
                设备
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/devicemotion');
            }}>
              <Text style={styles.tabTxtSelected}>
                设备运动
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/documentPicker');
            }}>
              <Text style={styles.tabTxtSelected}>
                文件选择
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/facedetector');
            }}>
              <Text style={styles.tabTxtSelected}>
                人脸检测
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/filesystem');
            }}>
              <Text style={styles.tabTxtSelected}>
                文件系统
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/flashList');
            }}>
              <Text style={styles.tabTxtSelected}>
                flashList
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/font');
            }}>
              <Text style={styles.tabTxtSelected}>
                字体
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/gesture-handler');
            }}>
              <Text style={styles.tabTxtSelected}>
                手势
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/gl-view');
            }}>
              <Text style={styles.tabTxtSelected}>
                gl-view
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/gyroscope');
            }}>
              <Text style={styles.tabTxtSelected}>
                陀螺仪
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/haptics');
            }}>
              <Text style={styles.tabTxtSelected}>
                触觉
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/image');
            }}>
              <Text style={styles.tabTxtSelected}>
                图片
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/image-manipulator');
            }}>
              <Text style={styles.tabTxtSelected}>
                图片处理
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/image-picker');
            }}>
              <Text style={styles.tabTxtSelected}>
                图片选择
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/intent-launcher');
            }}>
              <Text style={styles.tabTxtSelected}>
                系统页面
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/keep-awake');
            }}>
              <Text style={styles.tabTxtSelected}>
                保持唤醒
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/light-sensor');
            }}>
              <Text style={styles.tabTxtSelected}>
                光源
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/linear-gradient');
            }}>
              <Text style={styles.tabTxtSelected}>
                渐变色
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/location');
            }}>
              <Text style={styles.tabTxtSelected}>
                位置
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/lottie');
            }}>
              <Text style={styles.tabTxtSelected}>
                lottie
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/magnetometer');
            }}>
              <Text style={styles.tabTxtSelected}>
                magnetometer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/mail-composer');
            }}>
              <Text style={styles.tabTxtSelected}>
                mail
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/map-view');
            }}>
              <Text style={styles.tabTxtSelected}>
                地图
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/media-library');
            }}>
              <Text style={styles.tabTxtSelected}>
                媒体库
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/notifications');
            }}>
              <Text style={styles.tabTxtSelected}>
                通知
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/pedometer');
            }}>
              <Text style={styles.tabTxtSelected}>
                计步器
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/print');
            }}>
              <Text style={styles.tabTxtSelected}>
                打印
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/reanimated');
            }}>
              <Text style={styles.tabTxtSelected}>
                动画
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/screen-capture');
            }}>
              <Text style={styles.tabTxtSelected}>
                阻止截图
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/secure-store');
            }}>
              <Text style={styles.tabTxtSelected}>
                安全存储
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/speech');
            }}>
              <Text style={styles.tabTxtSelected}>
                文本转语音
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/splash-screen');
            }}>
              <Text style={styles.tabTxtSelected}>
                splash-screen
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/sqlite-next-hooks');
            }}>
              <Text style={styles.tabTxtSelected}>
                sqlite-next-hooks
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/sqlite-next');
            }}>
              <Text style={styles.tabTxtSelected}>
                sqlite-next
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/sqlite');
            }}>
              <Text style={styles.tabTxtSelected}>
                sqlite
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/status-bar');
            }}>
              <Text style={styles.tabTxtSelected}>
                状态栏
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/store-review');
            }}>
              <Text style={styles.tabTxtSelected}>
                store-review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/stripe');
            }}>
              <Text style={styles.tabTxtSelected}>
                stripe
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/svg');
            }}>
              <Text style={styles.tabTxtSelected}>
                svg
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/system-ui');
            }}>
              <Text style={styles.tabTxtSelected}>
                system-ui
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/task-manager');
            }}>
              <Text style={styles.tabTxtSelected}>
                任务管理
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/tracking-transparency');
            }}>
              <Text style={styles.tabTxtSelected}>
                跟踪透明度
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/updates');
            }}>
              <Text style={styles.tabTxtSelected}>
                更新
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/url');
            }}>
              <Text style={styles.tabTxtSelected}>
                url
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/video-thumbnails');
            }}>
              <Text style={styles.tabTxtSelected}>
                视频缩略图
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/video');
            }}>
              <Text style={styles.tabTxtSelected}>
                视频
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/view-pager');
            }}>
              <Text style={styles.tabTxtSelected}>
                类轮播
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/web-browser');
            }}>
              <Text style={styles.tabTxtSelected}>
                web-browser
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
              router.push('/webview');
            }}>
              <Text style={styles.tabTxtSelected}>
                webview
              </Text>
            </TouchableOpacity>
          </View>

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
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: {
    width: 150,
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

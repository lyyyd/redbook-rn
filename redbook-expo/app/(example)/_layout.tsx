import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="one"
        options={{
          title: 'Tab One',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Tab three',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Tab camera',
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="accelerometer"
        options={{
          title: '加速度计',
          href: null,
        }}
      />
      <Tabs.Screen
        name="applicationInfo"
        options={{
          title: '应用信息',
          href: null,
        }}
      />
      <Tabs.Screen
        name="av"
        options={{
          title: '音频播放',
          href: null,
        }}
      />
      <Tabs.Screen
        name="recordEasy"
        options={{
          title: '录音-easy',
          href: null,
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          title: '录音',
          href: null,
        }}
      />
      <Tabs.Screen
        name="backgroundFetch"
        options={{
          title: '后台任务',
          href: null,
        }}
      />
      <Tabs.Screen
        name="barometer"
        options={{
          title: '气压',
          href: null,
        }}
      />
      <Tabs.Screen
        name="battery"
        options={{
          title: '电池',
          href: null,
        }}
      />
      <Tabs.Screen
        name="blurView"
        options={{
          title: '模糊视图',
          href: null,
        }}
      />
      <Tabs.Screen
        name="brightness"
        options={{
          title: '屏幕亮度',
          href: null,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: '日历',
          href: null,
        }}
      />
      <Tabs.Screen
        name="captureRef"
        options={{
          title: '组件截图',
          href: null,
        }}
      />
      <Tabs.Screen
        name="cellular"
        options={{
          title: '蜂窝网络',
          href: null,
        }}
      />
      <Tabs.Screen
        name="checkbox"
        options={{
          title: '复选框',
          href: null,
        }}
      />
      <Tabs.Screen
        name="clipboard"
        options={{
          title: '粘贴板',
          href: null,
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: '联系方式',
          href: null,
        }}
      />
      <Tabs.Screen
        name="crypto"
        options={{
          title: '加密 crypto',
          href: null,
        }}
      />
      <Tabs.Screen
        name="dateTimePicker"
        options={{
          title: '日期选择',
          href: null,
        }}
      />
      <Tabs.Screen
        name="device"
        options={{
          title: '设备',
          href: null,
        }}
      />
      <Tabs.Screen
        name="devicemotion"
        options={{
          title: '设备运动',
          href: null,
        }}
      />
      <Tabs.Screen
        name="documentPicker"
        options={{
          title: '文件选择',
          href: null,
        }}
      />
      <Tabs.Screen
        name="facedetector"
        options={{
          title: '人脸检测',
          href: null,
        }}
      />
      <Tabs.Screen
        name="filesystem"
        options={{
          title: '文件系统',
          href: null,
        }}
      />
      <Tabs.Screen
        name="flashList"
        options={{
          title: 'flashList',
          href: null,
        }}
      />
      <Tabs.Screen
        name="font"
        options={{
          title: '字体',
          href: null,
        }}
      />
      <Tabs.Screen
        name="gesture-handler"
        options={{
          title: '手势',
          href: null,
        }}
      />
      <Tabs.Screen
        name="gl-view"
        options={{
          title: 'gl-view',
          href: null,
        }}
      />
      <Tabs.Screen
        name="gyroscope"
        options={{
          title: '陀螺仪',
          href: null,
        }}
      />
      <Tabs.Screen
        name="haptics"
        options={{
          title: '触觉',
          href: null,
        }}
      />
      <Tabs.Screen
        name="image"
        options={{
          title: '图片',
          href: null,
        }}
      />
      <Tabs.Screen
        name="image-manipulator"
        options={{
          title: '图片处理',
          href: null,
        }}
      />
      <Tabs.Screen
        name="image-picker"
        options={{
          title: '图片选择',
          href: null,
        }}
      />
      <Tabs.Screen
        name="intent-launcher"
        options={{
          title: '系统页面',
          href: null,
        }}
      />
      <Tabs.Screen
        name="keep-awake"
        options={{
          title: '保持唤醒',
          href: null,
        }}
      />
      <Tabs.Screen
        name="light-sensor"
        options={{
          title: '',
          href: null,
        }}
      />
      <Tabs.Screen
        name="光源"
        options={{
          title: '',
          href: null,
        }}
      />
      <Tabs.Screen
        name="linear-gradient"
        options={{
          title: '渐变色',
          href: null,
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: '位置',
          href: null,
        }}
      />
      <Tabs.Screen
        name="lottie"
        options={{
          title: 'lottie',
          href: null,
        }}
      />
      <Tabs.Screen
        name="magnetometer"
        options={{
          title: 'magnetometer',
          href: null,
        }}
      />
      <Tabs.Screen
        name="mail-composer"
        options={{
          title: 'mail',
          href: null,
        }}
      />
      <Tabs.Screen
        name="map-view"
        options={{
          title: '地图',
          href: null,
        }}
      />
      <Tabs.Screen
        name="media-library"
        options={{
          title: '媒体库',
          href: null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: '通知',
          href: null,
        }}
      />
      <Tabs.Screen
        name="pedometer"
        options={{
          title: '计步器',
          href: null,
        }}
      />
      <Tabs.Screen
        name="print"
        options={{
          title: '打印',
          href: null,
        }}
      />
      <Tabs.Screen
        name="reanimated"
        options={{
          title: '动画',
          href: null,
        }}
      />
      <Tabs.Screen
        name="screen-capture"
        options={{
          title: '阻止截图',
          href: null,
        }}
      />
      <Tabs.Screen
        name="secure-store"
        options={{
          title: '安全存储',
          href: null,
        }}
      />
      <Tabs.Screen
        name="speech"
        options={{
          title: '文本转语音',
          href: null,
        }}
      />
      <Tabs.Screen
        name="splash-screen"
        options={{
          title: 'splash-screen',
          href: null,
        }}
      />
      <Tabs.Screen
        name="status-bar"
        options={{
          title: '状态栏',
          href: null,
        }}
      />
      <Tabs.Screen
        name="svg"
        options={{
          title: 'svg',
          href: null,
        }}
      />
      <Tabs.Screen
        name="task-manager"
        options={{
          title: '任务管理',
          href: null,
        }}
      />
      <Tabs.Screen
        name="tracking-transparency"
        options={{
          title: '跟踪透明度',
          href: null,
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: '更新',
          href: null,
        }}
      />
      <Tabs.Screen
        name="video-thumbnails"
        options={{
          title: '视频缩略图',
          href: null,
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: '视频',
          href: null,
        }}
      />
      <Tabs.Screen
        name="view-pager"
        options={{
          title: '类轮播',
          href: null,
        }}
      />
      <Tabs.Screen
        name="web-browser"
        options={{
          title: 'web-browser',
          href: null,
        }}
      />
      <Tabs.Screen
        name="webview"
        options={{
          title: 'webview',
          href: null,
        }}
      />
    </Tabs>
  );
}

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
    </Tabs>
  );
}

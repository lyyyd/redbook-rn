import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";
import icon_tab_publish from '@/assets/img/icon_tab_publish.png';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const onPublishPress = () => {
        launchImageLibrary(
          {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
          },
          (res: ImagePickerResponse) => {
            const {assets} = res;
            if (!assets?.length) {
              console.log('选择图片失败');
              return;
            }
            const {uri, width, height, fileName, fileSize, type} = assets[0];
            console.log(`uri=${uri}, width=${width}, height=${height}`);
            console.log(
              `fileName=${fileName}, fileSize=${fileSize}, type=${type}`,
            );
          },
        );
  };
  const tabBarLabel = (title: string, focused = false) => (
    <Text
      style={{
        fontSize: focused ? 16 : 16,
        color: focused ? '#333' : '#999',
        fontWeight: focused ? 'bold' : 'normal',
        marginBottom: 10,
      }}>
      {title}
    </Text>
  )
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '首页',
          tabBarLabel: ({ focused }) => tabBarLabel('首页', focused),
          // tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarIcon: ({ color }) => <></>,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: '购物',
          tabBarLabel: ({ focused }) => tabBarLabel('购物', focused),
          // tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
          tabBarIcon: ({ color }) => <></>,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="publish"
        options={{
          title: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (<TouchableOpacity
                key='publish'
                onPress={onPublishPress}>
                <Image
                  style={styles.icon_tab_publish}
                  source={icon_tab_publish}
                />
              </TouchableOpacity>),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: '消息',
          tabBarLabel: ({ focused }) => tabBarLabel('消息', focused),
          // tabBarIcon: ({ color }) => <TabBarIcon name="info-circle" color={color} />,
          tabBarIcon: ({ color }) => <></>,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="mine"
        options={{
          title: '我',
          tabBarLabel: ({ focused }) => tabBarLabel('我', focused),
          // tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarIcon: ({ color }) => <></>,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="articleDetail"
        options={{
          title: '',
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="searchGoods"
        options={{
          title: '',
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  tabBarContainer: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabItem: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_tab_publish: {
    width: 58,
    height: 42,
    resizeMode: 'contain',
  },
});

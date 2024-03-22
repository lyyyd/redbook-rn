import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { load } from "@/utils/Storage";
import UserStore from "@/stores/UserStore";
import { useRouter } from "expo-router";
import { useAssets } from "expo-asset";

// import icon_logo_main from '@/assets/img/icon_main_logo.png';
// const icon_logo_main = require("@/assets/img/icon_main_logo.png");

// console.log("assets", assets);
// const icon_logo_main = assets ? assets[0] : '';
// const [{ localUri }] = await Asset.loadAsync(require('./assets/snack-icon.png'));

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const router = useRouter();
  const [assets, error] = useAssets([require("../assets/img/icon_main_logo.png")]);
  const [icon_logo_main] = assets ? assets : [];
  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 2000);
  }, []);

  const getUserInfo = async () => {
    const cacheUserInfo = await load("userInfo");
    if (!cacheUserInfo) {
      startLogin();
    } else {
      const parse = JSON.parse(cacheUserInfo);
      if (parse) {
        UserStore.setUserInfo(parse);
        startHome();
      } else {
        startLogin();
      }
    }
  };

  const startLogin = () => {
    // navigation.replace('login');
    router.replace("/login");
  };

  const startHome = () => {
    // navigation.replace('MainTab');
    // router.replace('/mainTab');
    router.replace("/home");
  };

  return (
    <View style={styles.root}>
      <Image
        resizeMode="contain"
        style={styles.logo_main}
        source={icon_logo_main}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
  },
  logo_main: {
    width: 200,
    height: 105,
    marginTop: 200,
  },
});

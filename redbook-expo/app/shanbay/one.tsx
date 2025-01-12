import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

import { View, Text } from 'react-native';

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <>
      <ScrollView>

      <View className="items-center justify-center flex-1 font-bold underline text-bold">
        <Text>Open up App</Text>
      </View>

      <View className="items-center justify-center flex-1 bg-emerald-400">
        <Text className="text-2xl font-bold text-white">Hello, NativeWind!</Text>
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

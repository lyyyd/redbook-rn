import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();
  return (
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
        router.push('/three');
        // router.push("/one");
      }}>
        <Text style={styles.tabTxtSelected}>
          选照片
        </Text>
      </TouchableOpacity>
    </View>
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
  },
  tabTxtSelected: {
    fontSize: 16,
    color: "#fff",
  },
});

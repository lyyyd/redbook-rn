// reanimated
// 一个提供 API 的库，可以极大地简化创建流畅、强大且可维护的动画的过程。
// 该库列在 Expo SDK 参考中，因为它包含在Expo Go中。您可以在开发构建中使用您选择的任何库。
// react - native - reanimated提供了一个 API，大大简化了创建流畅、强大且可维护的动画的过程。
// Reanimated 使用与 JavaScriptCore 的“远程 JS 调试”不兼容的 React Native API。要将调试器与您的应用程序一起使用react - native - reanimated，您需要使用Hermes JavaScript 引擎和Hermes JavaScript Inspector。

// import Animated, {
//     useSharedValue,
//     withTiming,
//     useAnimatedStyle,
//     Easing,
// } from 'react-native-reanimated';
// import { View, Button, StyleSheet } from 'react-native';

// export default function AnimatedStyleUpdateExample() {
//     const randomWidth = useSharedValue(10);

//     const config = {
//         duration: 500,
//         easing: Easing.bezier(0.5, 0.01, 0, 1),
//     };

//     const style = useAnimatedStyle(() => {
//         return {
//             width: withTiming(randomWidth.value, config),
//         };
//     });

//     return (
//         <View style={styles.container}>
//             <Animated.View style={[styles.box, style]} />
//             <Button
//                 title="toggle"
//                 onPress={() => {
//                     randomWidth.value = Math.random() * 350;
//                 }}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     box: {
//         width: 100,
//         height: 80,
//         backgroundColor: 'black',
//         margin: 30,
//     },
// });

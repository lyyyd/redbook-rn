// image 图像
/**
    一个跨平台、高性能的 React 组件，用于加载和渲染图像。
    expo - image是一个跨平台的 React 组件，用于加载和渲染图像。

    主要特点：
    专为速度而设计
    支持多种图像格式（包括动画格式）
    磁盘和内存缓存
    支持BlurHash和ThumbHash - 图像占位符的紧凑表示
    当源更改时在图像之间转换（不再闪烁！）
    实现 CSSobject - fit和object - position属性（参见contentFit和contentPositionprops）
    在幕后SDWebImage使用高性能Glide
 */

import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
});
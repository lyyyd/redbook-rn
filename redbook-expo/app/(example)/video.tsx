// video
// 提供API以在应用程序中实现视频播放和录制的库。

// 该Video组件expo - av显示与应用程序中其他 UI 元素内联的视频。

// 许多视频和音频都有通用的 API，这些 API 都记录在AV 文档中。本页涵盖视频特定的道具和 API。我们鼓励您浏览本文档以了解基本的视频功能，然后继续阅读AV 文档以获取更高级的功能。视频的音频体验（例如是否中断其他应用程序中已播放的音乐，或者是否在手机处于静音模式时播放声音）可以使用音频 API进行自定义。

import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function App() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

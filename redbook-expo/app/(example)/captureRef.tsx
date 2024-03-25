// 组件截图
// 一个库，允许您捕获 React Native 视图并将其保存为图像。

import { Button, Dimensions, Image, PixelRatio, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRef, useState } from 'react';
import { captureRef } from 'react-native-view-shot';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';

const window = Dimensions.get("window");

export default function TabTwoScreen() {

    const cameraRef = useRef(null);
    const targetPixelCount = 1080; // If you want full HD pictures
    const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
    // pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
    const pixels = targetPixelCount / pixelRatio;

    const [type, setType] = useState(CameraType.back);
    const [photo, setPhoto] = useState<CameraCapturedPicture>();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [result, setResult] = useState<string | null>(null);

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function takePhoto() {
        // Take a photo
        // takePictureAsync()
        if (cameraRef.current) {
            let photo = await (cameraRef.current as Camera).takePictureAsync();
            console.log(JSON.stringify(photo));
            setPhoto(photo);
        }
    }

    /**
     * 给viewRef视图截图, captureRef
     */
    const getCapture = async () => {
        console.log('给viewRef视图截图');
        const result = await captureRef(cameraRef, {
            result: 'tmpfile',
            height: pixels,
            width: pixels,
            quality: 1,
            format: 'png',
        })
        console.log('result', JSON.stringify(result));
        setResult(result);
    }
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Camera ref={cameraRef} style={styles.camera} type={type}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                                    <Text style={styles.text}>Flip Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={takePhoto}>
                                    <Text style={styles.text}>take a photo</Text>
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    </View>
                    <View>
                        {/* <Image resizeMode='cover' source={{ uri: photo?.uri }} style={{ width: 300, height: 400 }}></Image> */}
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={getCapture}>
                        <Text style={styles.tabTxtSelected}>
                            组件截图
                        </Text>
                    </TouchableOpacity>

                    {/* // 展示截图 */}
                    <Text style={styles.title}>截图</Text>

                    <Image resizeMode='cover' source={{ uri: result || '' }} style={{ width: 300, height: 400 }}></Image>
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
    btn: {
        width: 100,
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
    camera: {
        width: window.width,
        height: window.width / (3 / 4),
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

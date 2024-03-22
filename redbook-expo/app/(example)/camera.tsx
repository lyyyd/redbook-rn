import { Camera, CameraCapturedPicture, CameraProps, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

const window = Dimensions.get("window");

export default function App() {
    const [type, setType] = useState(CameraType.back);
    const [photo, setPhoto] = useState<CameraCapturedPicture>();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef(null);

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

    return (
        <ScrollView>
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
                <Image resizeMode='cover' source={{ uri: photo?.uri }} style={{ width: 300, height: 400 }}></Image>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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

// facedetector
// 一个使用 Google Mobile Vision 来检测图像上的人脸的库。

// 已弃用：从 SDK 51 起将不再提供此库。react-native-vision-camera如果您需要此功能，我们建议您使用此库。
// expo-face-detector让您可以利用Google ML Kit框架的强大功能来检测图像上的人脸。

import * as React from 'react';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

const App = () => (
  <Camera
    // other props
    onFacesDetected={handleFacesDetected}
    faceDetectorSettings={{
      mode: FaceDetector.FaceDetectorMode.fast,
      detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
      runClassifications: FaceDetector.FaceDetectorClassifications.none,
      minDetectionInterval: 100,
      tracking: true,
    }}
  />
);

const handleFacesDetected = ({ faces }) => {
  console.log(faces);
};

export default App;

// svg
// 允许在您的应用程序中使用 SVG 的库。

// 该库列在 Expo SDK 参考中，因为它包含在Expo Go中。您可以在开发构建中使用您选择的任何库。
// react - native - svg允许您在应用程序中使用 SVG，并支持交互性和动画。

import * as React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

export default function SvgComponent(props) {
    return (
        <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
            <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
            <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
        </Svg>
    );
}

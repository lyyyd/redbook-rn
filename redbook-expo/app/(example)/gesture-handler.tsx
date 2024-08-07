// gesture-handler
// 提供用于处理复杂手势的 API 的库。
// 用于处理复杂手势的 API。来自项目的自述文件：
// 该库提供了一个 API，可公开特定于移动平台的触摸和手势处理和识别的本机功能。它允许定义复杂的手势处理和识别逻辑，这些逻辑 100 % 在本机线程中运行，因此具有确定性。

import { Component } from 'react';
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';

class ComponentName extends Component {
    render() {
        return (
            <TapGestureHandler>
                <RotationGestureHandler>...</RotationGestureHandler>
            </TapGestureHandler>
        );
    }
}
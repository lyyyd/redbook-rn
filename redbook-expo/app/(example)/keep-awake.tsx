// keep-awake
// 一个 React 组件，可防止屏幕在渲染时休眠。
// expo - keep - awake提供了一个防止屏幕休眠的 React hook 和一对强制启用此行为的函数。

import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { Text, View } from 'react-native';

export default function KeepAwakeExample() {
    useKeepAwake();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This screen will never sleep!</Text>
        </View>
    );
}


// import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
// import React from 'react';
// import { Button, View } from 'react-native';

// export default class KeepAwakeExample extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={this._activate} title="Activate" />
//         <Button onPress={this._deactivate} title="Deactivate" />
//       </View>
//     );
//   }

//   _activate = () => {
//     activateKeepAwake();
//     alert('Activated!');
//   };

//   _deactivate = () => {
//     deactivateKeepAwake();
//     alert('Deactivated!');
//   };
// }

// updates
// 允许以编程方式控制和响应应用程序可用的新更新的库。

// 该expo - updates库允许您以编程方式控制和响应应用程序可用的新更新。

import { View, Button } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
    async function onFetchUpdateAsync() {
        try {
            const update = await Updates.checkForUpdateAsync();

            if (update.isAvailable) {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
            }
        } catch (error) {
            // You can also add an alert() to see the error message in case of an error when fetching updates.
            alert(`Error fetching latest Expo update: ${error}`);
        }
    }

    return (
        <View>
            <Button title="Fetch update" onPress={onFetchUpdateAsync} />
        </View>
    );
}

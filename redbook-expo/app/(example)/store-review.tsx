// storereview
// 一个库，提供对本机 API 的访问以进行应用内评论。

// expo - store - review提供对SKStoreReviewControlleriOS 上的 API 和ReviewManagerAndroid 5.0 + 中的 API 的访问，允许您要求用户对您的应用程序进行评分，而无需离开应用程序本身。

import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as StoreReview from 'expo-store-review';

export default function TabTwoScreen() {
    const androidPackageName = 'host.exp.exponent';
    // Open the Android Play Store in the browser -> redirects to Play Store on Android
    // Linking.openURL(
    //     `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`
    // );
    // Open the Android Play Store directly
    // Linking.openURL(`market://details?id=${androidPackageName}&showAllReviews=true`);


    // StoreReview.hasAction()
    // StoreReview.isAvailableAsync()
    // StoreReview.requestReview()
    const goGooglePayReview = async () => {
        try {
            await StoreReview.requestReview();
        } catch (error) {
            console.log('Error', error);
        }
    }
    // StoreReview.storeUrl()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>

            <TouchableOpacity style={styles.btn} onPress={() => {
                goGooglePayReview();
                // router.push("/one");
            }}>
                <Text style={styles.tabTxtSelected}>
                    requestReview
                </Text>
            </TouchableOpacity>
        </View>
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
        width: 150,
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
});

// stripe
// 提供对原生 API 的访问以集成 Stripe 支付的库。

// Expo 包括对 的支持 @stripe/stripe-react-native，它允许您使用 React Native 和 Expo 在本机 Android 和 iOS 应用程序中构建令人愉快的支付体验。该库提供了功能强大且可自定义的 UI 屏幕和元素，可以开箱即用地收集用户的付款详细信息。


// system - ui
// 允许与系统 UI 元素交互的库。

// expo - system - ui使您能够与 React 树之外的 UI 元素进行交互。特别是根视图背景颜色，并在 Android 上全局锁定用户界面样式。


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import WebhookPaymentScreen from '@/modules/stripe/screens/WebhookPaymentScreen';
// import HomeScreen from '@/modules/stripe/screens/HomeScreen';
// import NoWebhookPaymentScreen from '@/modules/stripe/screens/NoWebhookPaymentScreen';
// import ApplePayScreen from '@/modules/stripe/screens/ApplePayScreen';
// import SetupFuturePaymentScreen from '@/modules/stripe/screens/SetupFuturePaymentScreen';
import { StatusBar } from 'react-native';
import { colors } from '@/modules/stripe/colors';
// import CreateTokenScreen from '@/modules/stripe/screens/CreateTokenScreen';
// import PaymentsUICompleteScreen from '@/modules/stripe/screens/PaymentsUICompleteScreen';
// import PaymentSheetWithSetupIntent from '@/modules/stripe/screens/PaymentSheetWithSetupIntent';
// import PaymentsUICustomScreen from '@/modules/stripe/screens/PaymentsUICustomScreen';
// import CVCReCollectionScreen from '@/modules/stripe/screens/CVCReCollectionScreen';
// import IdealPaymentScreen from '@/modules/stripe/screens/IdealPaymentScreen';
// import IdealSetupFuturePaymentScreen from '@/modules/stripe/screens/IdealSetupFuturePaymentScreen';
import AlipayPaymentScreen from '@/modules/stripe/screens/AlipayPaymentScreen';
// import PaymentResultScreen from '@/modules/stripe/screens/PaymentResultScreen';
// import SofortPaymentScreen from '@/modules/stripe/screens/SofortPaymentScreen';
// import SofortSetupFuturePaymentScreen from '@/modules/stripe/screens/SofortSetupFuturePaymentScreen';
// import FPXPaymentScreen from '@/modules/stripe/screens/FPXPaymentScreen';
// import BancontactPaymentScreen from '@/modules/stripe/screens/BancontactPaymentScreen';
// import BancontactSetupFuturePaymentScreen from '@/modules/stripe/screens/BancontactSetupFuturePaymentScreen';
// import SepaPaymentScreen from '@/modules/stripe/screens/SepaPaymentScreen';
// import SepaSetupFuturePaymentScreen from '@/modules/stripe/screens/SepaSetupFuturePaymentScreen';
// import OxxoPaymentScreen from '@/modules/stripe/screens/OxxoPaymentScreen';
// import GiropayPaymentScreen from '@/modules/stripe/screens/GiropayPaymentScreen';
// import EPSPaymentScreen from '@/modules/stripe/screens/EPSPaymentScreen';
// import GrabPayPaymentScreen from '@/modules/stripe/screens/GrabPayPaymentScreen';
// import P24PaymentScreen from '@/modules/stripe/screens/P24PaymentScreen';
// import AuBECSDebitPaymentScreen from '@/modules/stripe/screens/AuBECSDebitPaymentScreen';
// import AfterpayClearpayPaymentScreen from '@/modules/stripe/screens/AfterpayClearpayPaymentScreen';
// import KlarnaPaymentScreen from '@/modules/stripe/screens/KlarnaPaymentScreen';
// import AuBECSDebitSetupPaymentScreen from '@/modules/stripe/screens/AuBECSDebitSetupPaymentScreen';
// import MultilineWebhookPaymentScreen from '@/modules/stripe/screens/MultilineWebhookPaymentScreen';
// import GooglePayScreen from '@/modules/stripe/screens/GooglePayScreen';
// import ACHPaymentScreen from '@/modules/stripe/screens/ACHPaymentScreen';
// import ACHSetupScreen from '@/modules/stripe/screens/ACHSetupScreen';
// import PayPalScreen from '@/modules/stripe/screens/PayPalScreen';
// import AffirmScreen from '@/modules/stripe/screens/AffirmScreen';
// import CollectBankAccountScreen from '@/modules/stripe/screens/CollectBankAccountScreen';
// import CashAppScreen from '@/modules/stripe/screens/CashAppScreen';
// import PaymentSheetDeferredIntentScreen from '@/modules/stripe/screens/PaymentSheetDeferredIntentScreen';
// import PaymentSheetDeferredIntentMultiStepScreen from '@/modules/stripe/screens/PaymentSheetDeferredIntentMultiStepScreen';
// import CustomerSheetScreen from '@/modules/stripe/screens/CustomerSheetScreen';
// import RevolutPayScreen from '@/modules/stripe/screens/RevolutPayScreen';



import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';


const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    WebhookPaymentScreen: undefined;
    HomeScreen: undefined;
    NoWebhookPaymentScreen: undefined;
    CreateTokenScreen: undefined;
    ApplePayScreen: undefined;
    SetupFuturePaymentScreen: undefined;
    PaymentsUICompleteScreen: undefined;
    PaymentSheetWithSetupIntent: undefined;
    PaymentsUICustomScreen: undefined;
    CVCReCollectionScreen: undefined;
    IdealPaymentScreen: undefined;
    IdealSetupFuturePaymentScreen: undefined;
    AlipayPaymentScreen: undefined;
    PaymentResultScreen: { url: string };
    SofortPaymentScreen: undefined;
    SofortSetupFuturePaymentScreen: undefined;
    FPXPaymentScreen: undefined;
    BancontactPaymentScreen: undefined;
    BancontactSetupFuturePaymentScreen: undefined;
    SepaPaymentScreen: undefined;
    SepaSetupFuturePaymentScreen: undefined;
    OxxoPaymentScreen: undefined;
    GiropayPaymentScreen: undefined;
    EPSPaymentScreen: undefined;
    GrabPayPaymentScreen: undefined;
    P24PaymentScreen: undefined;
    AuBECSDebitPaymentScreen: undefined;
    AfterpayClearpayPaymentScreen: undefined;
    KlarnaPaymentScreen: undefined;
    AuBECSDebitSetupPaymentScreen: undefined;
    MultilineWebhookPaymentScreen: undefined;
    GooglePayScreen: undefined;
    ACHPaymentScreen: undefined;
    ACHSetupScreen: undefined;
    PayPalScreen: undefined;
    CashAppScreen: undefined;
    AffirmScreen: undefined;
    CollectBankAccountScreen: undefined;
    PaymentSheetDeferredIntentScreen: undefined;
    PaymentSheetDeferredIntentMultiStepScreen: undefined;
    CustomerSheetScreen: undefined;
    RevolutPayScreen: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <AlipayPaymentScreen />
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
});



// export default function App() {
//     return (
//         <>
//             <StatusBar
//                 backgroundColor={colors.blurple_dark}
//                 barStyle="light-content"
//                 translucent
//             />
//             <NavigationContainer>
//                 <Stack.Navigator
//                     screenOptions={{
//                         headerTintColor: colors.white,
//                         headerStyle: {
//                             backgroundColor: colors.blurple,
//                         },
//                         headerTitleStyle: {
//                             color: colors.white,
//                         },
//                     }}
//                 >
//                     {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
//                     <Stack.Screen
//                         name="WebhookPaymentScreen"
//                         component={WebhookPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="MultilineWebhookPaymentScreen"
//                         component={MultilineWebhookPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="NoWebhookPaymentScreen"
//                         component={NoWebhookPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="AuBECSDebitPaymentScreen"
//                         component={AuBECSDebitPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="AuBECSDebitSetupPaymentScreen"
//                         component={AuBECSDebitSetupPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="CreateTokenScreen"
//                         component={CreateTokenScreen}
//                     />
//                     <Stack.Screen name="ApplePayScreen" component={ApplePayScreen} />
//                     <Stack.Screen
//                         name="SetupFuturePaymentScreen"
//                         component={SetupFuturePaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="PaymentsUICompleteScreen"
//                         component={PaymentsUICompleteScreen}
//                     />
//                     <Stack.Screen
//                         name="PaymentSheetWithSetupIntent"
//                         component={PaymentSheetWithSetupIntent}
//                     />
//                     <Stack.Screen
//                         name="PaymentSheetDeferredIntentScreen"
//                         component={PaymentSheetDeferredIntentScreen}
//                     />
//                     <Stack.Screen
//                         name="PaymentSheetDeferredIntentMultiStepScreen"
//                         component={PaymentSheetDeferredIntentMultiStepScreen}
//                     />
//                     <Stack.Screen
//                         name="PaymentsUICustomScreen"
//                         component={PaymentsUICustomScreen}
//                     />
//                     <Stack.Screen
//                         name="CVCReCollectionScreen"
//                         component={CVCReCollectionScreen}
//                     />
//                     <Stack.Screen
//                         name="IdealPaymentScreen"
//                         component={IdealPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="IdealSetupFuturePaymentScreen"
//                         component={IdealSetupFuturePaymentScreen}
//                     /> */}
//                     <Stack.Screen
//                         name="AlipayPaymentScreen"
//                         component={AlipayPaymentScreen}
//                     />
//                     {/* <Stack.Screen name="P24PaymentScreen" component={P24PaymentScreen} />
//                     <Stack.Screen
//                         name="PaymentResultScreen"
//                         component={PaymentResultScreen}
//                     />
//                     <Stack.Screen name="FPXPaymentScreen" component={FPXPaymentScreen} />
//                     <Stack.Screen
//                         name="SofortPaymentScreen"
//                         component={SofortPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="SofortSetupFuturePaymentScreen"
//                         component={SofortSetupFuturePaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="GrabPayPaymentScreen"
//                         component={GrabPayPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="BancontactPaymentScreen"
//                         component={BancontactPaymentScreen}
//                     />
//                     <Stack.Screen name="EPSPaymentScreen" component={EPSPaymentScreen} />
//                     <Stack.Screen
//                         name="BancontactSetupFuturePaymentScreen"
//                         component={BancontactSetupFuturePaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="SepaPaymentScreen"
//                         component={SepaPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="SepaSetupFuturePaymentScreen"
//                         component={SepaSetupFuturePaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="OxxoPaymentScreen"
//                         component={OxxoPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="GiropayPaymentScreen"
//                         component={GiropayPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="AfterpayClearpayPaymentScreen"
//                         component={AfterpayClearpayPaymentScreen}
//                     />
//                     <Stack.Screen
//                         name="KlarnaPaymentScreen"
//                         component={KlarnaPaymentScreen}
//                     />
//                     <Stack.Screen name="GooglePayScreen" component={GooglePayScreen} />
//                     <Stack.Screen name="ACHPaymentScreen" component={ACHPaymentScreen} />
//                     <Stack.Screen name="ACHSetupScreen" component={ACHSetupScreen} />
//                     <Stack.Screen name="PayPalScreen" component={PayPalScreen} />
//                     <Stack.Screen name="CashAppScreen" component={CashAppScreen} />
//                     <Stack.Screen name="AffirmScreen" component={AffirmScreen} />
//                     <Stack.Screen
//                         name="CollectBankAccountScreen"
//                         component={CollectBankAccountScreen}
//                     />
//                     <Stack.Screen
//                         name="CustomerSheetScreen"
//                         component={CustomerSheetScreen}
//                     />
//                     <Stack.Screen name="RevolutPayScreen" component={RevolutPayScreen} /> */}
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </>
//     );
// }

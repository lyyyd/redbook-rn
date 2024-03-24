// record 录音
import React, { useEffect, useState } from "react";
import {
    Dimensions,
    Image,
    //   Slider,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ScrollView
} from "react-native";
import Slider from "@react-native-community/slider";
import { Audio, AVPlaybackStatus, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import * as FileSystem from "expo-file-system";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as Icons from "@/modules/record/Icons";
import { set } from "mobx";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const BACKGROUND_COLOR = "#FFF8ED";
const LIVE_COLOR = "#FF0000";
const DISABLED_OPACITY = 0.5;
const RATE_SCALE = 3.0;

type Props = {};

type State = {
    haveRecordingPermissions: boolean;
    isLoading: boolean;
    isPlaybackAllowed: boolean;
    muted: boolean;
    soundPosition: number | null;
    soundDuration: number | null;
    recordingDuration: number | null;
    shouldPlay: boolean;
    isPlaying: boolean;
    isRecording: boolean;
    fontLoaded: boolean;
    shouldCorrectPitch: boolean;
    volume: number;
    rate: number;
};

export default function App() {
    const [permissionResponse, requestPermission] = Audio.usePermissions();

    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isSeeking, setIsSeeking] = useState<boolean>(false);
    const [shouldPlayAtEndOfSeek, setShouldPlayAtEndOfSeek] = useState<boolean>(false);
    // const [recordingSettings, setRecordingSettings] = useState<Audio.RecordingOptions>(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY);
    const [recordingSettings, setRecordingSettings] = useState<Audio.RecordingOptions>(Audio.RecordingOptionsPresets.HIGH_QUALITY);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [state, setState] = useState<State>({
        haveRecordingPermissions: false,
        isLoading: false,
        isPlaybackAllowed: false,
        muted: false,
        soundPosition: null,
        soundDuration: null,
        recordingDuration: null,
        shouldPlay: false,
        isPlaying: false,
        isRecording: false,
        fontLoaded: false,
        shouldCorrectPitch: true,
        volume: 1.0,
        rate: 1.0,
    })

    useEffect(() => {
        setState(prevState => ({ ...prevState, haveRecordingPermissions: permissionResponse?.status === "granted" }));
    }, [permissionResponse, state.haveRecordingPermissions]);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                "cutive-mono-regular": require("@/assets/record/fonts/CutiveMono-Regular.ttf"),
            });
            setState(prevState => ({
                ...prevState,
                fontLoaded: true
            }));
        })();
        _askForPermissions();
    }, []);
    /**
     * 请求权限
     */
    const _askForPermissions = async () => {
        try {
            if (permissionResponse && permissionResponse?.status !== 'granted') {
                console.log('无 permission..');
                await requestPermission();
            } else {
                console.log('有 permission..');
                setState(prevState => ({ ...prevState, haveRecordingPermissions: true }));
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
        console.log('1.debug Permission ****:', permissionResponse && permissionResponse.status === "granted");
    };

    /**
     * 更新页面音频播放状态
     * @param status 
     */
    const _updateScreenForSoundStatus = (status: AVPlaybackStatus) => {
        if (status.isLoaded) {
            setState(prevState => ({
                ...prevState,
                soundDuration: status.durationMillis ?? null,
                soundPosition: status.positionMillis,
                shouldPlay: status.shouldPlay,
                isPlaying: status.isPlaying,
                rate: status.rate,
                muted: status.isMuted,
                volume: status.volume,
                shouldCorrectPitch: status.shouldCorrectPitch,
                isPlaybackAllowed: true,
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                soundDuration: null,
                soundPosition: null,
                isPlaybackAllowed: false,
            }));
            if (status.error) {
                console.log(`FATAL PLAYER ERROR: ${status.error}`);
            }
        }
    };
    /**
     * 更新页面录音状态
     * @param status 
     */
    const _updateScreenForRecordingStatus = (status: Audio.RecordingStatus) => {
        if (status.canRecord) {
            setState(prevState => ({
                ...prevState,
                isRecording: status.isRecording,
                recordingDuration: status.durationMillis,
            }));
        } else if (status.isDoneRecording) {
            setState(prevState => ({
                ...prevState,
                isRecording: false,
                recordingDuration: status.durationMillis,
            }));
            if (!isLoading) {
                _stopRecordingAndEnablePlayback();
            }
        }
    };
    /**
     * 停止播放并开始录音
     */
    const _stopPlaybackAndBeginRecording = async () => {
        setIsLoading(true);
        if (sound !== null) {
            await sound.unloadAsync();
            sound.setOnPlaybackStatusUpdate(null);
            setSound(null);
        }
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: InterruptionModeIOS.MixWithOthers,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
        if (recording !== null) {
            recording.setOnRecordingStatusUpdate(null);
            setRecording(null)
        }
        console.log('1.debug', recording)
        const recordingT = new Audio.Recording();
        console.log('2.debug', recordingT)
        await recordingT.prepareToRecordAsync(recordingSettings);
        recordingT.setOnRecordingStatusUpdate(_updateScreenForRecordingStatus);

        console.log('3.debug', recordingT)
        await setRecording(recordingT);
        await recordingT.startAsync(); // Will call _updateScreenForRecordingStatus to update the screen.

        console.log('5.debug', recording)
        setIsLoading(false);
    }
    /**
     * 停止录音并启用播放
     * @returns 
     */
    const _stopRecordingAndEnablePlayback = async () => {
        setIsLoading(true);
        if (!recording) {
            return;
        }
        try {
            await recording.stopAndUnloadAsync();
        } catch (error: any) {
            // On Android, calling stop before any data has been collected results in
            // an E_AUDIO_NODATA error. This means no audio data has been written to
            // the output file is invalid.
            if (error.code === "E_AUDIO_NODATA") {
                console.log(
                    `Stop was called too quickly, no data has yet been received (${error.message})`
                );
            } else {
                console.log("STOP ERROR: ", error.code, error.name, error.message);
            }
            setIsLoading(false);
            return;
        }
        const info = await FileSystem.getInfoAsync(recording.getURI() || "");
        console.log(`FILE INFO: ${JSON.stringify(info)}`);
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: InterruptionModeIOS.MixWithOthers,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
        const { sound, status } = await recording.createNewLoadedSoundAsync(
            {
                isLooping: true,
                isMuted: state.muted,
                volume: state.volume,
                rate: state.rate,
                shouldCorrectPitch: state.shouldCorrectPitch,
            },
            _updateScreenForSoundStatus
        );
        setSound(sound);
        setIsLoading(false);
    }
    /**
     * 录音按钮点击事件
     */
    const _onRecordPressed = () => {
        if (state.isRecording) {
            _stopRecordingAndEnablePlayback();
        } else {
            _stopPlaybackAndBeginRecording();
        }
    };
    /**
     * 播放\暂停按钮点击事件
     */
    const _onPlayPausePressed = () => {
        if (sound != null) {
            if (state.isPlaying) {
                sound.pauseAsync();
            } else {
                sound.playAsync();
            }
        }
    };
    /**
     * 播放停止按钮点击事件
     */
    const _onStopPressed = () => {
        if (sound != null) {
            sound.stopAsync();
        }
    };
    /**
     * 静音按钮点击事件
     */
    const _onMutePressed = () => {
        if (sound != null) {
            sound.setIsMutedAsync(!state.muted);
        }
    };
    /**
     * 音量滑块值改变事件
     * @param value 
     */
    const _onVolumeSliderValueChange = (value: number) => {
        if (sound != null) {
            sound.setVolumeAsync(value);
        }
    };
    /**
     * 设置播放速率
     * @param value 
     */
    const _trySetRate = async (rate: number, shouldCorrectPitch: boolean) => {
        if (sound != null) {
            try {
                await sound.setRateAsync(rate, shouldCorrectPitch);
            } catch (error) {
                // Rate changing could not be performed, possibly because the client's Android API is too old.
            }
        }
    };
    /**
     * 播放速率滑块值改变完成事件
     * @param value 
     */
    const _onRateSliderSlidingComplete = async (value: number) => {
        _trySetRate(value * RATE_SCALE, state.shouldCorrectPitch);
    };
    /**
     * 音量滑块值改变事件
     */
    const _onPitchCorrectionPressed = () => {
        _trySetRate(state.rate, !state.shouldCorrectPitch);
    };
    /**
     * 播放进度滑块值改变事件
     * @param value 
     */
    const _onSeekSliderValueChange = (value: number) => {
        if (sound != null && !isSeeking) {
            setIsSeeking(true);
            setShouldPlayAtEndOfSeek(state.shouldPlay);
            sound.pauseAsync();
        }
    };
    /**
     * 播放进度滑块滑动完成事件
     * @param value 
     */
    const _onSeekSliderSlidingComplete = async (value: number) => {
        if (sound != null) {
            setIsSeeking(false);
            const seekPosition = value * (state.soundDuration || 0);
            if (shouldPlayAtEndOfSeek) {
                sound.playFromPositionAsync(seekPosition);
            } else {
                sound.setPositionAsync(seekPosition);
            }
        }
    };
    /**
     * 获取播放进度滑块位置
     */
    const _getSeekSliderPosition = () => {
        if (
            sound != null &&
            state.soundPosition != null &&
            state.soundDuration != null
        ) {
            return state.soundPosition / state.soundDuration;
        }
        return 0;
    }

    /**
     * 毫秒转换为分钟秒
     * @param millis 
     * @returns 
     */
    const _getMMSSFromMillis = (millis: number) => {
        const totalSeconds = millis / 1000;
        const seconds = Math.floor(totalSeconds % 60);
        const minutes = Math.floor(totalSeconds / 60);

        const padWithZero = (number: number) => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        return padWithZero(minutes) + ":" + padWithZero(seconds);
    }
    /**
     * 获取播放时间戳
     * @returns 
     */
    const _getPlaybackTimestamp = () => {
        if (
            sound != null &&
            state.soundPosition != null &&
            state.soundDuration != null
        ) {
            return `${_getMMSSFromMillis(
                state.soundPosition
            )} / ${_getMMSSFromMillis(state.soundDuration)}`;
        }
        return "";
    }
    /**
     * 获取录音时间戳
     * @returns 
     */
    const _getRecordingTimestamp = () => {
        if (state.recordingDuration != null) {
            return `${_getMMSSFromMillis(state.recordingDuration)}`;
        }
        return `${_getMMSSFromMillis(0)}`;
    }
    // 字体加载失败
    if (!state.fontLoaded) {
        return <View style={styles.emptyContainer} />;
    }
    // 无权限
    if (!state.haveRecordingPermissions) {
        return (
            <View style={styles.container}>
                <View />
                <Text
                    style={[
                        styles.noPermissionsText,
                        { fontFamily: "cutive-mono-regular" },
                    ]}
                >
                    You must enable audio recording permissions in order to use this
                    app.
                </Text>
                <View />
            </View>
        );
    }
    // 权限已获取
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {/* 录音 */}
                    <View
                        style={[
                            styles.halfScreenContainer,
                            {
                                opacity: isLoading ? DISABLED_OPACITY : 1.0,
                            },
                        ]}
                    >
                        <View />
                        <View style={styles.recordingContainer}>
                            <View />
                            <TouchableHighlight
                                underlayColor={BACKGROUND_COLOR}
                                style={styles.wrapper}
                                onPress={_onRecordPressed}
                                disabled={isLoading}
                            >
                                <Image style={styles.image} source={Icons.RECORD_BUTTON.module} />
                            </TouchableHighlight>
                            <View style={styles.recordingDataContainer}>
                                <View />
                                <Text
                                    style={[styles.liveText, { fontFamily: "cutive-mono-regular" }]}
                                >
                                    {state.isRecording ? "LIVE" : ""}
                                </Text>
                                <View style={styles.recordingDataRowContainer}>
                                    <Image
                                        style={[
                                            styles.image,
                                            { opacity: state.isRecording ? 1.0 : 0.0 },
                                        ]}
                                        source={Icons.RECORDING.module}
                                    />
                                    <Text
                                        style={[
                                            styles.recordingTimestamp,
                                            { fontFamily: "cutive-mono-regular" },
                                        ]}
                                    >
                                        {_getRecordingTimestamp()}
                                    </Text>
                                </View>
                                <View />
                            </View>
                            <View />
                        </View>
                        <View />
                    </View>
                    {/* 播放 */}
                    <View
                        style={[
                            styles.halfScreenContainer,
                            {
                                opacity:
                                    !state.isPlaybackAllowed || isLoading
                                        ? DISABLED_OPACITY
                                        : 1.0,
                            },
                        ]}
                    >
                        <View />
                        <View style={styles.playbackContainer}>
                            <Slider
                                style={styles.playbackSlider}
                                trackImage={Icons.TRACK_1.module}
                                thumbImage={Icons.THUMB_1.module}
                                value={_getSeekSliderPosition()}
                                onValueChange={_onSeekSliderValueChange}
                                onSlidingComplete={_onSeekSliderSlidingComplete}
                                disabled={!state.isPlaybackAllowed || isLoading}
                            />
                            <Text
                                style={[
                                    styles.playbackTimestamp,
                                    { fontFamily: "cutive-mono-regular" },
                                ]}
                            >
                                {_getPlaybackTimestamp()}
                            </Text>
                        </View>
                        <View
                            style={[styles.buttonsContainerBase, styles.buttonsContainerTopRow]}
                        >
                            <View style={styles.volumeContainer}>
                                <TouchableHighlight
                                    underlayColor={BACKGROUND_COLOR}
                                    style={styles.wrapper}
                                    onPress={_onMutePressed}
                                    disabled={!state.isPlaybackAllowed || isLoading}
                                >
                                    <Image
                                        style={styles.image}
                                        source={
                                            state.muted
                                                ? Icons.MUTED_BUTTON.module
                                                : Icons.UNMUTED_BUTTON.module
                                        }
                                    />
                                </TouchableHighlight>
                                <Slider
                                    style={styles.volumeSlider}
                                    trackImage={Icons.TRACK_1.module}
                                    thumbImage={Icons.THUMB_2.module}
                                    value={1}
                                    onValueChange={_onVolumeSliderValueChange}
                                    disabled={!state.isPlaybackAllowed || isLoading}
                                />
                            </View>
                            <View style={styles.playStopContainer}>
                                <TouchableHighlight
                                    underlayColor={BACKGROUND_COLOR}
                                    style={styles.wrapper}
                                    onPress={_onPlayPausePressed}
                                    disabled={!state.isPlaybackAllowed || isLoading}
                                >
                                    <Image
                                        style={styles.image}
                                        source={
                                            state.isPlaying
                                                ? Icons.PAUSE_BUTTON.module
                                                : Icons.PLAY_BUTTON.module
                                        }
                                    />
                                </TouchableHighlight>
                                <TouchableHighlight
                                    underlayColor={BACKGROUND_COLOR}
                                    style={styles.wrapper}
                                    onPress={_onStopPressed}
                                    disabled={!state.isPlaybackAllowed || isLoading}
                                >
                                    <Image style={styles.image} source={Icons.STOP_BUTTON.module} />
                                </TouchableHighlight>
                            </View>
                            <View />
                        </View>
                        <View
                            style={[
                                styles.buttonsContainerBase,
                                styles.buttonsContainerBottomRow,
                            ]}
                        >
                            <Text style={styles.timestamp}>Rate:</Text>
                            <Slider
                                style={styles.rateSlider}
                                trackImage={Icons.TRACK_1.module}
                                thumbImage={Icons.THUMB_1.module}
                                value={state.rate / RATE_SCALE}
                                onSlidingComplete={_onRateSliderSlidingComplete}
                                disabled={!state.isPlaybackAllowed || isLoading}
                            />
                            <TouchableHighlight
                                underlayColor={BACKGROUND_COLOR}
                                style={styles.wrapper}
                                onPress={_onPitchCorrectionPressed}
                                disabled={!state.isPlaybackAllowed || isLoading}
                            >
                                <Text style={[{ fontFamily: "cutive-mono-regular" }]}>
                                    PC: {state.shouldCorrectPitch ? "yes" : "no"}
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View />
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        alignSelf: "stretch",
        backgroundColor: BACKGROUND_COLOR,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: BACKGROUND_COLOR,
        minHeight: DEVICE_HEIGHT,
        maxHeight: DEVICE_HEIGHT,
    },
    noPermissionsText: {
        textAlign: "center",
    },
    wrapper: {},
    halfScreenContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        minHeight: DEVICE_HEIGHT / 2,
        maxHeight: DEVICE_HEIGHT / 2,
    },
    recordingContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        minHeight: Icons.RECORD_BUTTON.height,
        maxHeight: Icons.RECORD_BUTTON.height,
    },
    recordingDataContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: Icons.RECORD_BUTTON.height,
        maxHeight: Icons.RECORD_BUTTON.height,
        minWidth: Icons.RECORD_BUTTON.width * 3.0,
        maxWidth: Icons.RECORD_BUTTON.width * 3.0,
    },
    recordingDataRowContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: Icons.RECORDING.height,
        maxHeight: Icons.RECORDING.height,
    },
    playbackContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        minHeight: Icons.THUMB_1.height * 2.0,
        maxHeight: Icons.THUMB_1.height * 2.0,
    },
    playbackSlider: {
        alignSelf: "stretch",
    },
    liveText: {
        color: LIVE_COLOR,
    },
    recordingTimestamp: {
        paddingLeft: 20,
    },
    playbackTimestamp: {
        textAlign: "right",
        alignSelf: "stretch",
        paddingRight: 20,
    },
    image: {
        backgroundColor: BACKGROUND_COLOR,
    },
    textButton: {
        backgroundColor: BACKGROUND_COLOR,
        padding: 10,
    },
    buttonsContainerBase: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonsContainerTopRow: {
        maxHeight: Icons.MUTED_BUTTON.height,
        alignSelf: "stretch",
        paddingRight: 20,
    },
    playStopContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: ((Icons.PLAY_BUTTON.width + Icons.STOP_BUTTON.width) * 3.0) / 2.0,
        maxWidth: ((Icons.PLAY_BUTTON.width + Icons.STOP_BUTTON.width) * 3.0) / 2.0,
    },
    volumeContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: DEVICE_WIDTH / 2.0,
        maxWidth: DEVICE_WIDTH / 2.0,
    },
    volumeSlider: {
        width: DEVICE_WIDTH / 2.0 - Icons.MUTED_BUTTON.width,
    },
    buttonsContainerBottomRow: {
        maxHeight: Icons.THUMB_1.height,
        alignSelf: "stretch",
        paddingRight: 20,
        paddingLeft: 20,
    },
    timestamp: {
        fontFamily: "cutive-mono-regular",
    },
    rateSlider: {
        width: DEVICE_WIDTH / 2.0,
    },
});
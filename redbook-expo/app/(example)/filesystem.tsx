// filesystem
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const gifDir = FileSystem.cacheDirectory + 'giphy/';
const gifFileUri = (gifId: string) => gifDir + `gif_${gifId}_200.gif`;
const gifUrl = (gifId: string) => `https://media1.giphy.com/media/${gifId}/200.gif`;

// Checks if gif directory exists. If not, creates it
async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(gifDir);
    if (!dirInfo.exists) {
        console.log("Gif directory doesn't exist, creating…");
        await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
    }
}

// Downloads all gifs specified as array of IDs
export async function addMultipleGifs(gifIds: string[]) {
    try {
        await ensureDirExists();

        console.log('Downloading', gifIds.length, 'gif files…');
        await Promise.all(gifIds.map(id => FileSystem.downloadAsync(gifUrl(id), gifFileUri(id))));
    } catch (e) {
        console.error("Couldn't download gif files:", e);
    }
}

// Returns URI to our local gif file
// If our gif doesn't exist locally, it downloads it
export async function getSingleGif(gifId: string) {
    await ensureDirExists();

    const fileUri = gifFileUri(gifId);
    const fileInfo = await FileSystem.getInfoAsync(fileUri);

    if (!fileInfo.exists) {
        console.log("Gif isn't cached locally. Downloading…");
        await FileSystem.downloadAsync(gifUrl(gifId), fileUri);
    }

    return fileUri;
}

// Exports shareable URI - it can be shared outside your app
export async function getGifContentUri(gifId: string) {
    return FileSystem.getContentUriAsync(await getSingleGif(gifId));
}

// Deletes whole giphy directory with all its content
export async function deleteAllGifs() {
    console.log('Deleting all GIF files…');
    await FileSystem.deleteAsync(gifDir);
}


export default function TabTwoScreen() {
    const [state, setState] = useState<any>();
    useEffect(() => {
        (async () => {
            const callback = (downloadProgress: any) => {
                const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
                setState({
                    downloadProgress: progress,
                });
            };

            const downloadResumable = FileSystem.createDownloadResumable(
                'http://techslides.com/demos/sample-videos/small.mp4',
                FileSystem.documentDirectory + 'small.mp4',
                {},
                callback
            );

            // try {
            //     const { uri } = await downloadResumable.downloadAsync();
            //     console.log('Finished downloading to ', uri);
            // } catch (e) {
            //     console.error(e);
            // }

            // try {
            //     await downloadResumable.pauseAsync();
            //     console.log('Paused download operation, saving for future retrieval');
            //     AsyncStorage.setItem('pausedDownload', JSON.stringify(downloadResumable.savable()));
            // } catch (e) {
            //     console.error(e);
            // }

            // try {
            //     const { uri } = await downloadResumable.resumeAsync();
            //     console.log('Finished downloading to ', uri);
            // } catch (e) {
            //     console.error(e);
            // }

            //To resume a download across app restarts, assuming the DownloadResumable.savable() object was stored:
            // const downloadSnapshotJson = await AsyncStorage.getItem('pausedDownload');
            // const downloadSnapshot = JSON.parse(downloadSnapshotJson);
            // const downloadResumable = new FileSystem.DownloadResumable(
            //     downloadSnapshot.url,
            //     downloadSnapshot.fileUri,
            //     downloadSnapshot.options,
            //     callback,
            //     downloadSnapshot.resumeData
            // );

            try {
                const { uri } = await downloadResumable.resumeAsync();
                console.log('Finished downloading to ', uri);
            } catch (e) {
                console.error(e);
            }

        })();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="app/(tabs)/two.tsx" />
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



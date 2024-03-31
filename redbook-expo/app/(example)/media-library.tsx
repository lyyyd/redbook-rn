// media-library
// 提供对设备媒体库的访问的库。
// expo - media - library提供对用户媒体库的访问，允许他们从您的应用程序访问现有的图像和视频，以及保存新的图像和视频。您还可以订阅对用户媒体库所做的任何更新。

import { useState, useEffect } from 'react';
import { Button, Text, SafeAreaView, ScrollView, StyleSheet, Image, View, Platform } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
    const [albums, setAlbums] = useState(null);
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

    async function getAlbums() {
        if (permissionResponse.status !== 'granted') {
            await requestPermission();
        }
        const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
            includeSmartAlbums: true,
        });
        setAlbums(fetchedAlbums);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={getAlbums} title="Get albums" />
            <ScrollView>
                {albums && albums.map((album) => <AlbumEntry album={album} />)}
            </ScrollView>
        </SafeAreaView>
    );
}

function AlbumEntry({ album }) {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        async function getAlbumAssets() {
            const albumAssets = await MediaLibrary.getAssetsAsync({ album });
            setAssets(albumAssets.assets);
        }
        getAlbumAssets();
    }, [album]);

    return (
        <View key={album.id} style={styles.albumContainer}>
            <Text>
                {album.title} - {album.assetCount ?? 'no'} assets
            </Text>
            <View style={styles.albumAssetsContainer}>
                {assets && assets.map((asset) => (
                    <Image source={{ uri: asset.uri }} width={50} height={50} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        justifyContent: 'center',
        ...Platform.select({
            android: {
                paddingTop: 40
            }
        }),
    },
    albumContainer: {
        paddingHorizontal: 20,
        marginBottom: 12,
        gap: 4,
    },
    albumAssetsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

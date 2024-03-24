import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }: { placeholderImageSource: string, selectedImage: string }) {
  const imageSource: any = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

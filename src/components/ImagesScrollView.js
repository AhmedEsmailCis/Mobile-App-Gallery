import React, { PureComponent } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class PhotosScreen extends PureComponent {
  render() {
    return (
      <View style={styles.containerOfSmallImage}>
        <TouchableOpacity style={styles.TouchableOpacityImage} onPress={this.props.onPress}>
          <Image
            source={{
              uri: this.props.thumbnailUrl,
            }}
            style={
              this.props.activeImageValue === this.props.photoId
                ? styles.activeSmallImage
                : styles.smallImage
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
}
// styles
const styles = StyleSheet.create({
  activeSmallImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: "#F0F2F5",
  },
  smallImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    backgroundColor: "#F0F2F5",
  },
  containerOfSmallImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  TouchableOpacityImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

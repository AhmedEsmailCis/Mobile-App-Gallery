import React, { PureComponent } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export default class ImageContainer extends PureComponent {
  render() {
    return (
      <View style={styles.containerOfBigImage}>
        <Image
          source={{
            uri: this.props.activeImageUrl,
          }}
          style={styles.bigImage}
        />
      </View>
    );
  }
}
// styles
const styles = StyleSheet.create({
  bigImage: {
    height: width * 0.95,
    width: width * 0.95,
    borderRadius: 10,
    backgroundColor: "#F0F2F5",
  },
  containerOfBigImage: {
    height: width * 0.95,
    width: width * 0.95,
    borderRadius: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

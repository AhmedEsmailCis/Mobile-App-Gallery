import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text, ScrollView } from "react-native";
import ImageContainer from "../components/ImageContainer";
import PhotoLabelSection from "../components/PhotoLabelSection";
import ImagesScrollView from "../components/ImagesScrollView";

export default class PhotosScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImageValue: this.props.navigation.state.params.photosOfAlbum[0].id,
      activeImageUrl: this.props.navigation.state.params.photosOfAlbum[0].url,
      photoTitle: this.props.navigation.state.params.photosOfAlbum[0].title,
    };
  }

  smallPhotoOnPress = (item) => {
    this.setState({
      activeImageValue: item.id,
      activeImageUrl: item.url,
      photoTitle: item.title,
    });
  };

  render() {
    return (
      <View style={styles.view}>
        <StatusBar backgroundColor="#1F2E65" />
        <View style={styles.headerStyle}>
          <Text style={styles.headerLabel}>Photos</Text>
        </View>
        <ImageContainer activeImageUrl={this.state.activeImageUrl} />
        <PhotoLabelSection
          albumTitle={this.props.navigation.state.params.albumData.title}
          photoTitle={this.state.photoTitle}
        />
        <ScrollView horizontal>
          {this.props.navigation.state.params.photosOfAlbum.map((i, _) => (
            <ImagesScrollView
              key={i.id}
              photoId={i.id}
              thumbnailUrl={i.thumbnailUrl}
              activeImageValue={this.state.activeImageValue}
              onPress={() => this.smallPhotoOnPress(i)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
// styles
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#13245C",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    backgroundColor: "#1F2E65",
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerLabel: {
    color: "white",
    fontSize: 20,
    left: 10,
  },
});

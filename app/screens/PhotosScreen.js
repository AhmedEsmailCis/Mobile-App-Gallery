//import
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
const {width} = Dimensions.get('window');
export default class PhotosScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImageValue: this.props.navigation.state.params.photosOfAlbum[0].id,
      activeImageUrl: this.props.navigation.state.params.photosOfAlbum[0].url,
      photoTitle: this.props.navigation.state.params.photosOfAlbum[0].title,
    };
  }
  _keyExtractor = (item, _) => item.photoId.toString();
  render() {
    return (
      <View style={styles.view}>
        <StatusBar backgroundColor="#1F2E65" />
        <View style={styles.headerStyle}>
          <Text style={styles.headerLabel}>Photos</Text>
        </View>
        <View style={styles.containerOfBigImage}>
          <Image
            source={{
              uri: this.state.activeImageUrl,
            }}
            style={styles.bigImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.albumTitle}>
            {this.props.navigation.state.params.albumData.title}
          </Text>
          <Text style={styles.photoTitle}>{this.state.photoTitle}</Text>
        </View>
        <ScrollView horizontal>
          {this.props.navigation.state.params.photosOfAlbum.map((i, _) => (
            <View style={styles.containerOfSmallImage} key={i.id}>
              <TouchableOpacity
                style={styles.TouchableOpacityImage}
                onPress={() => {
                  this.setState({
                    activeImageValue: i.id,
                    activeImageUrl: i.url,
                    photoTitle: i.title,
                  });
                }}>
                <Image
                  source={{
                    uri: i.thumbnailUrl,
                  }}
                  style={
                    this.state.activeImageValue === i.id
                      ? styles.activeSmallImage
                      : styles.smallImage
                  }
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
//styles
const styles = StyleSheet.create({
  bigImage: {
    height: width * 0.95,
    width: width * 0.95,
    borderRadius: 10,
    backgroundColor: '#F0F2F5',
  },
  containerOfBigImage: {
    height: width * 0.95,
    width: width * 0.95,
    borderRadius: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumTitle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  photoTitle: {
    marginTop: 10,
    fontSize: 12,
    color: 'grey',
  },
  textContainer: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  activeSmallImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: '#F0F2F5',
  },
  smallImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    backgroundColor: '#F0F2F5',
  },
  containerOfSmallImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacityImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  view: {
    backgroundColor: '#13245C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: '#1F2E65',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerLabel: {
    color: 'white',
    fontSize: 20,
    left: 10,
  },
});

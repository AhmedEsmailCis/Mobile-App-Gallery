import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');
// create Component
export default class AlbumSection extends Component {
  onPressFunc = () => {
    this.props.navigation.navigate('Photos', {
      photosOfAlbum: this.props.photosOfAlbum,
      albumTitle: this.props.albumTitle,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailImages}>
          <View style={styles.rowBetweenImage}>
            {this.props.photosOfAlbum.length > 1 ? (
              <Image
                source={{uri: this.props.photosOfAlbum[0].thumbnailUrl}}
                style={styles.thumbnailImage}
              />
            ) : null}
            {this.props.photosOfAlbum.length > 2 ? (
              <Image
                source={{uri: this.props.photosOfAlbum[1].thumbnailUrl}}
                style={styles.thumbnailImage}
              />
            ) : null}
          </View>
          <View style={styles.rowBetweenImage}>
            {this.props.photosOfAlbum.length > 2 ? (
              <Image
                source={{uri: this.props.photosOfAlbum[2].thumbnailUrl}}
                style={styles.thumbnailImage}
              />
            ) : null}
            {this.props.photosOfAlbum.length > 3 ? (
              <View style={styles.numberWithImageView}>
                <Image
                  source={{uri: this.props.photosOfAlbum[3].thumbnailUrl}}
                  style={styles.thumbnailImage}
                />
                <Text style={styles.number}>
                  +{this.props.photosOfAlbum.length - 4}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.albumTitle}>{this.props.albumTitle}</Text>
          <Text style={styles.ownerName}>{this.props.name}</Text>
          <Text style={styles.emailText}>{this.props.email}</Text>
          <Text style={styles.websiteText}>{this.props.website}</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={this.onPressFunc}>
              <Text style={styles.buttonText}>view album</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1F2E65',
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    height: width * 0.45,
    borderRadius: 10,
    elevation: 3,
    justifyContent: 'center',
  },
  thumbnailImages: {
    width: width * 0.45,
    borderRadius: 10,
    margin: 5,
  },
  thumbnailImage: {
    flex: 1,
    borderRadius: 10,
    margin: 2,
    backgroundColor: '#F0F2F5',
  },
  numberWithImageView: {
    flex: 1,
    borderRadius: 10,
    margin: 2,
  },
  rowBetweenImage: {flexDirection: 'row', flex: 1},
  number: {
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    bottom: '30%',
    fontWeight: 'bold',
  },
  albumTitle: {
    color: 'white',
    fontSize: 11,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  ownerName: {
    color: '#5E678E',

    fontSize: 9,
    textAlign: 'left',
  },
  emailText: {
    color: '#5E678E',

    fontSize: 9,
    textAlign: 'left',
  },
  websiteText: {
    color: '#5E678E',

    fontSize: 9,
    textAlign: 'left',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
    margin: 10,
  },
  buttonView: {
    justifyContent: 'center',
    backgroundColor: '#5E678E',
    width: 70,
    height: 30,
    marginTop: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 1,
  },
  TouchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
});

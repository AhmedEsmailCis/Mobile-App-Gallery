import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import AlbumSection from '../components/AlbumSection';
import Axios from 'axios';
// create Component
export default class AlbumsScreen extends Component {
  constructor() {
    super();
    this.state = {
      pickerValue: -1,
      generationArray: [],
      loader: true,
    };
  }
  componentDidMount() {
    this.loadData(this.state.pickerValue);
  }
  loadData = async (pickerValue) => {
    this.setState({loader: true});
    const albumUrl =
      pickerValue === -1
        ? 'https://jsonplaceholder.typicode.com/albums'
        : 'https://jsonplaceholder.typicode.com/albums?userId=' +
          pickerValue.toString();
    const requestAlbumsData = await Axios.get(albumUrl);
    let dataOfAlbums = requestAlbumsData.data;
    //---------------------------------------------------------------------
    const userUrl =
      pickerValue === -1
        ? 'https://jsonplaceholder.typicode.com/users'
        : 'https://jsonplaceholder.typicode.com/users?id=' +
          pickerValue.toString();
    const requestUserData = await Axios.get(userUrl);
    let dataOfUsers = requestUserData.data;
    //----------------------------------------------------------------------
    let dataOfPhotos = [];
    for (let index = 0; index < dataOfAlbums.length; index++) {
      const photoUrl =
        'https://jsonplaceholder.typicode.com/photos?albumId=' +
        dataOfAlbums[index].id.toString();
      const requestPhotoData = await Axios.get(photoUrl);
      dataOfPhotos = dataOfPhotos.concat(requestPhotoData.data);
    }
    //----------------------------------------------------------------------
    //Generation the Array of Albums Section
    let gArray = [];
    for (let i = 0; i < dataOfAlbums.length; i++) {
      let photoData = [];
      for (let j = 0; j < dataOfPhotos.length; j++) {
        if (dataOfAlbums[i].id === dataOfPhotos[j].albumId) {
          const photoObj = {
            photoId: dataOfPhotos[j].id,
            photoTitle: dataOfPhotos[j].title,
            url: dataOfPhotos[j].url,
            thumbnailUrl: dataOfPhotos[j].thumbnailUrl,
          };
          photoData.push(photoObj);
        }
      }
      for (let j = 0; j < dataOfUsers.length; j++) {
        if (dataOfUsers[j].id === dataOfAlbums[i].userId) {
          const dataObj = {
            userId: dataOfUsers[j].id,
            albumId: dataOfAlbums[i].id,
            name: dataOfUsers[j].name,
            website: dataOfUsers[j].website,
            email: dataOfUsers[j].email,
            albumTitle: dataOfAlbums[i].title,
            photosOfAlbum: photoData,
          };
          gArray.push(dataObj);
          break;
        }
      }
    }
    //----------------------------------------------------------------------
    this.setState({loader: false, generationArray: gArray});
  };
  onValueChangeForPicker = (itemValue, itemIndex) => {
    this.setState({pickerValue: itemValue});
    this.loadData(itemValue);
  };
  _keyExtractor = (item, _) => item.albumId.toString();
  render() {
    return (
      <View style={styles.albumsScreen}>
        <StatusBar backgroundColor="#1F2E65" />
        <Header
          onValueChange={this.onValueChangeForPicker}
          selectedValue={this.state.pickerValue}
        />
        {this.state.loader ? (
          <View style={styles.loaderStyle}>
            <ActivityIndicator size="large" color="green" />
          </View>
        ) : (
          <FlatList
            keyExtractor={this._keyExtractor}
            data={this.state.generationArray}
            renderItem={({item}) => (
              <AlbumSection
                userId={item.userId}
                albumId={item.albumId}
                name={item.name}
                website={item.website}
                email={item.email}
                albumTitle={item.albumTitle}
                photosOfAlbum={item.photosOfAlbum}
                navigation={this.props.navigation}
              />
            )}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loaderStyle: {
    justifyContent: 'center',
    height: '70%',
  },
  albumsScreen: {
    backgroundColor: '#13245C',
    flex: 1,
  },
});

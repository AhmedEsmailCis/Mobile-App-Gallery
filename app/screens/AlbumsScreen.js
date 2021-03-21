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
      dataOfUsers: [],
    };
  }
  componentDidMount = async () => {
    this.loadUserData();
    this.loadData(this.state.pickerValue);
  };
  loadData = async (pickerValue) => {
    this.setState({loader: true});
    const dataOfAlbums = await this.loadAlbumsData(pickerValue);
    let {generationArray, dataOfUsers} = this.state;
    generationArray = [];
    for (let i = 0; i < dataOfAlbums.length; i++) {
      const photoUrl =
        'https://jsonplaceholder.typicode.com/photos?albumId=' +
        dataOfAlbums[i].id.toString();
      const requestPhotoData = await Axios.get(photoUrl);
      for (let j = 0; j < dataOfUsers.length; j++) {
        if (dataOfUsers[j].id === dataOfAlbums[i].userId) {
          const dataObj = {
            userObj: dataOfUsers[j],
            albumData: dataOfAlbums[i],
            photosOfAlbum: requestPhotoData.data,
          };
          generationArray.push(dataObj);
          break;
        }
      }
    }
    this.setState({loader: false, generationArray});
  };
  loadAlbumsData = async (pickerValue) => {
    const albumUrl =
      pickerValue === -1
        ? 'https://jsonplaceholder.typicode.com/albums'
        : 'https://jsonplaceholder.typicode.com/albums?userId=' +
          pickerValue.toString();
    const requestAlbumsData = await Axios.get(albumUrl);
    return requestAlbumsData.data;
  };
  loadUserData = async () => {
    const request = await Axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    this.setState({dataOfUsers: request.data});
  };
  onValueChangeForPicker = (itemValue, _) => {
    this.setState({pickerValue: itemValue});
    this.loadData(itemValue);
  };
  _keyExtractor = (item, _) => item.albumData.id.toString();
  render() {
    return (
      <View style={styles.albumsScreen}>
        <StatusBar backgroundColor="#1F2E65" />
        <Header
          onValueChange={this.onValueChangeForPicker}
          selectedValue={this.state.pickerValue}
          dataOfUsers={this.state.dataOfUsers}
        />
        {this.state.loader ? (
          <View style={styles.loaderStyle}>
            <ActivityIndicator testID="loader" size="large" color="green" />
          </View>
        ) : (
          <FlatList
            keyExtractor={this._keyExtractor}
            data={this.state.generationArray}
            renderItem={({item}) => (
              <AlbumSection
                userObj={item.userObj}
                albumData={item.albumData}
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

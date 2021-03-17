import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AlbumsScreen from './screens/AlbumsScreen';
import PhotosScreen from './screens/PhotosScreen';
const RootNavigator = createStackNavigator({
  Albums: {
    screen: AlbumsScreen,
    navigationOptions: {
      header: null,
      headerShow: false,
    },
  },
  Photos: {
    screen: PhotosScreen,
    navigationOptions: {
      headerShow: false,
      header: null,
    },
  },
});
export default createAppContainer(RootNavigator);

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
export default class PhotoLabelSection extends Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.albumTitle}>{this.props.albumTitle}</Text>
        <Text style={styles.photoTitle}>{this.props.photoTitle}</Text>
      </View>
    );
  }
}
//styles
const styles = StyleSheet.create({
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
});

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerStyle}>
          <Text style={styles.label}>Albums</Text>
        </View>
        <View>
          <Icon name={'filter'} size={15} style={styles.filterIcon} />
          <Picker
            itemStyle={styles.pickerItem}
            mode="dropdown"
            selectedValue={this.props.selectedValue}
            onValueChange={this.props.onValueChange}
            style={styles.picker}>
            <Picker.Item label="Choose User" value={-1} />
            {this.props.dataOfUsers.map((i, _) => (
              <Picker.Item
                key={i.id}
                label={'User ' + i.id.toString()}
                value={i.id}
              />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#1F2E65',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    color: 'white',
    fontSize: 20,
    left: 10,
  },
  filterIcon: {
    color: 'white',
    position: 'absolute',
    bottom: 18,
    right: 20,
    fontSize: 20,
  },
  picker: {
    height: 60,
    width: '100%',
    left: 212,
    color: 'white',
    fontSize: 20,
  },
});

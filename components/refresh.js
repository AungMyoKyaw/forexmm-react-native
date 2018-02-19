import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

class Refresh extends Component {
  render() {
    const {onPress} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.center}>
          <Text style={styles.text}>UPDATE EXCHANGE RATE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#009688'
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Refresh;

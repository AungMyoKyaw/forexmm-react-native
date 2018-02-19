import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Header extends Component {
  render() {
    const {header} = this.props;
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>{header}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 53,
    flexDirection: 'column',
    backgroundColor: '#009688',
    justifyContent: 'center'
  },
  header: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Header;

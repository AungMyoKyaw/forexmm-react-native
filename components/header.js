import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header as NE_Header} from 'react-native-elements';

class Header extends Component {
  render() {
    const {header} = this.props;
    return <NE_Header centerComponent={{text: header, style: styles.header}} />;
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  }
});

export default Header;

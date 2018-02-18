import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';

const extractKey = ({id}) => id;

class Table extends Component {
  renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.currencyName}</Text>
        <Text>{item.currency}</Text>
        <Text>{item.value}</Text>
      </View>
    );
  };

  render() {
    const {rates} = this.props;
    return (
      <FlatList
        data={rates}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

export default Table;

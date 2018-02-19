import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';

const extractKey = ({id}) => id;

class Table extends Component {
  renderItem = ({item}) => {
    return (
      <View style={item.id % 2 == 0 ? styles.row : [styles.row, styles.dark]}>
        <Text style={styles.country}>{item.country}</Text>
        <Text style={styles.value}>{item.value}</Text>
        <Text style={styles.currency}>{item.currency}</Text>
        <Text style={styles.rate}>{item.rate} MMK</Text>
      </View>
    );
  };

  render() {
    const {rates} = this.props;
    return (
      <FlatList
        style={styles.container}
        data={rates}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  dark: {
    backgroundColor: '#E8E8E8'
  },
  country: {
    flex: 0.5,
    paddingLeft: 40
  },
  value: {
    flex: 0.1
  },
  currency: {
    flex: 0.1
  },
  rate: {
    flex: 0.3,
    paddingLeft: 40
  }
});

export default Table;

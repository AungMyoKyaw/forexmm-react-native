import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Constants} from 'expo';
import {connect} from 'react-redux';
import Header from '../components/header.js';
import Table from '../components/table.js';
import {getExchangeRates} from '../actions';

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getExchangeRates());
  }
  render() {
    const {exchangeRates, header} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Header header={header} />
        <Table rates={exchangeRates} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems:'stretch'
  },
  statusBar: {
    backgroundColor: '#009688',
    height: Constants.statusBarHeight
  }
});
const mapStateToProps = state => {
  const {exchangeRates, header} = state;
  return {
    header,
    exchangeRates
  };
};

export default connect(mapStateToProps)(App);

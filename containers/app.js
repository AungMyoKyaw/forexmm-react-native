import React, {Component} from 'react';
import Header from '../components/header.js';
import Table from '../components/table.js';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {getExchangeRates} from '../actions';
import {Card} from 'react-native-elements';

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getExchangeRates());
  }
  render() {
    const {exchangeRates, header} = this.props;
    return (
      <View style={styles.container}>
        <Header header={header} />
        <Table rates={exchangeRates} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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

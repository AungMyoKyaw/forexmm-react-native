import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Button} from 'react-native';
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

  onClickButton() {
    const {dispatch} = this.props;
    dispatch(getExchangeRates());
  }

  render() {
    const {exchangeRates, header, loading, error} = this.props;
    if (error) {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          <Header header={header} />
          <View style={styles.center}>
            <Text style={styles.errorText}>
              FAILED TO GET CURRENCY EXCHANGE RATES
            </Text>
            <Button
              onPress={this.onClickButton.bind(this)}
              title="Try Again!"
              color="#009688"
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Header header={header} />
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" animating={true} />
          </View>
        ) : (
          <Table rates={exchangeRates} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusBar: {
    backgroundColor: '#009688',
    height: Constants.statusBarHeight
  },
  errorText: {
    color: 'red',
    marginBottom: 40
  }
});

const mapStateToProps = state => {
  const {exchangeRates, header, isFetching, error} = state;
  return {
    header,
    exchangeRates,
    loading: isFetching,
    error
  };
};

export default connect(mapStateToProps)(App);

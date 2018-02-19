import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Button} from 'react-native';

class ErrorMessage extends Component {
  render() {
    const {onClickButton} = this.props;
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          FAILED TO GET CURRENCY EXCHANGE RATES
        </Text>
        <Button onPress={onClickButton} title="Try Again!" color="#009688" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    marginBottom: 40
  }
});

export default ErrorMessage;

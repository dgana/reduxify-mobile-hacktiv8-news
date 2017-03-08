import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button } from 'native-base'

import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'

export default class People extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
            <Button onPress={this.props.back} light block style={{width: '48%'}} >
              <Text>Back</Text>
            </Button>
            <Button onPress={this.props.goToNews} light block style={{width: '48%'}} >
              <Text>News</Text>
            </Button>
          </View>
        <Contents />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

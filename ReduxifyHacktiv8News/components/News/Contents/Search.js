import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchNews } from '../../../actions'
import NewsList from './NewsList'

class Search extends Component {
  render() {
    return (
      <View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Type here to search for news"
            onChangeText={
              text => {
                this.props.searchNews(text)
              }
            }
          />
        </View>
        <NewsList />
      </View>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  search: {
    padding: 10,
    width: width,
  },
  input: {
    height: 50,
    borderColor: 'royalblue',
    borderWidth: 1,
    padding: 10,
    margin: 15
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({searchNews}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)

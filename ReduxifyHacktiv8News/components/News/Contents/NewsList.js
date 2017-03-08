import React from 'react'
import { connect } from 'react-redux'
import { WebView } from 'react-native'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';


const NewsList = props => {
  return (
    <ScrollView>
      { props.news
          .map((item, index) => <Text key={index} style={styles.newsList}>{item.title}</Text>)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  newsList: {
    marginTop:5,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 40
  }
})

const mapStateToProps = (state) => {
  return {
    news: state.searchKeyword
  }

}

export default connect(mapStateToProps)(NewsList)

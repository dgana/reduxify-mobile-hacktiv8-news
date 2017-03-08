import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux'

const PeopleList = props => {
  return (
    <ScrollView>
      { props.people
          .map((item, index) => <Text key={index} style={styles.peopleList}>{item.name}</Text>)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  peopleList: {
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
    people: state.people
  }
}

export default connect(mapStateToProps)(PeopleList)

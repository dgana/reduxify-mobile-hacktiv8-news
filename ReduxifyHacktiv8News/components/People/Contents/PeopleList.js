import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux'
import { fetchPeople } from '../../../actions'
import { bindActionCreators } from 'redux'

console.log(fetchPeople);

class PeopleList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount () {
    this.props.fetchPeople()
  }

  render(){
    return (
      <ScrollView>
        { this.props.people
            .map((item, index) => <Text key={index} style={styles.peopleList}>{item.author}</Text>)
        }
      </ScrollView>
    )
  }
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

const mapDispatchToProps = (dispatch) => {
  // fetchPeople: () => dispatch(fetchPeople())
  return bindActionCreators({fetchPeople}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)

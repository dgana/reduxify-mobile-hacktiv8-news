export const searchNews = (text) => {
  return {
    type: 'SEARCH_NEWS',
    payload: text
  }
}

export const fetchPeopleSuccess = (people) => {
  return {
    type: 'FETCH_PEOPLE_SUCCESS',
    payload: people
  }
}

export const fetchPeople = () => {
  return (dispatch) => {
    fetch('https://hn.algolia.com/api/v1/items/1')
      .then(res => res.json())
      .then(people => dispatch(fetchPeopleSuccess(people.children)))
  }
}

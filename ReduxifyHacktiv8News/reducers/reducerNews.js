const initialState = [
  {
    id: 1,
    title: 'React',
    url: 'https://facebook.github.io/react/'
  },
  {
    id: 2,
    title: 'React Native',
    url: 'https://facebook.github.io/react-native/'
  },
  {
    id: 3,
    title: 'Redux',
    url: 'http://redux.js.org/'
  },
]

export const newsListsReducer = () => {
  return initialState
}

export const searchKeywordReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_NEWS':
      let searchNewsLists = initialState.filter(item => new RegExp(action.payload, 'i').test(item.title))
      return searchNewsLists
    default:
      return state
  }
}

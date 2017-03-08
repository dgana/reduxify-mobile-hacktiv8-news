import { combineReducers } from 'redux'
import { newsListsReducer, searchKeywordReducer } from './reducerNews'
import { peopleListsReducer } from './reducerPeople'

const rootReducers = combineReducers({
  news: newsListsReducer,
  people: peopleListsReducer,
  searchKeyword: searchKeywordReducer
})

export default rootReducers

export const peopleListsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE_SUCCESS':
      return action.payload
    default:
      return state
  }
}

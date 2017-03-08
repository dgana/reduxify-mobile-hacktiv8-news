const initialState = [
  {
    id: 1,
    name: 'Luke Skywalker',
    url: 'http://starwars.wikia.com/wiki/Luke_Skywalker'
  },
  {
    id: 2,
    name: 'Obi-wan Kenobi',
    url: 'http://starwars.wikia.com/wiki/Obi-Wan_Kenobi'
  },
  {
    id: 3,
    name: 'Darth Maul',
    url: 'http://starwars.wikia.com/wiki/Darth_Maul'
  }
]

export const peopleListsReducer = () => {
  return initialState
}

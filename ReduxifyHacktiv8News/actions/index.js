export const searchNews = (text) => {
  return {
    type: 'SEARCH_NEWS',
    payload: text
  }
}

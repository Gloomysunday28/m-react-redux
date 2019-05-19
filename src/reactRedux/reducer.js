const reducer = function(state, action) {
  if (!state) {
    return {
      color: 'green'
    }
  }

  if (state[action.type]) {
    return Object.assign({}, state, {[[action.type]]: action[action.type]})
  } else return state
}

export default reducer
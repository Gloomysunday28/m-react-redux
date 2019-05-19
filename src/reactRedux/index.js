import reducer from './reducer'

const createStore = (reducer) => {
  let state = null
  const listen = [] // 存放监听函数
  const subscribe = _ => listen.push(_) // 添加监听函数
  const getState = _ => state
  const dispatch = action => {
    state = reducer(state, action)
    listen.forEach(listenFn => listenFn())
  }
  dispatch(null) // 初始化State值
  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore(reducer)

export default store
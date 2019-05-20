# m-react-redux

### 本文模拟了react-redux, 实现了基本的功能

属性 | 说明 |
----|------|
store | 用来存储dispatch, subscribe, state等属性和方法
connect | 高阶组件, 接收mapStateToProps等方法来获取组件需要的state和事件
Provide | 根组件， 用来传递store
reducer | 更新State的值
subscribe | 用来添加监听函数
getState | 用来获取state的值
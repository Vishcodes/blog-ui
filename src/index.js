import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { Provider } from 'react-redux'
// import configureStore from './store/configStore'


// const store = configureStore() 

// // demo & testing time
// store.subscribe(() =>{
//     console.log(store.getState())
// })
// console.log(store.getState())

// const jsx = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

ReactDOM.render(<App/>, document.getElementById('root'));
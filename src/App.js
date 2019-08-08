import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import About from './About'
import Posts from './Posts'
import PostShow from './PostShow'
import Users from './Users';
import UserShow from './UserShow'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2>Blog</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                            
                    <Route path="/" component={Posts} exact={true} />
                    <Route path="/about" component={About}/>
                    <Route path="/posts" component={Posts} exact={true} />
                    <Route path="/posts/:id" component={PostShow} />
                    <Route path="/users" component={Users} exact={true}/>
                    <Route path="/users/:id" component={UserShow} exact={true}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App


// import React from 'react';
// import Counter from './components/counter'
// import { connect } from 'react-redux'


// function App(props) {
//   return (
//     <div calssName="container">
//         <h2>Counter - React + Redux Example </h2>
//         <h2>App - {props.count}</h2>
//         <Counter />
//     </div> 
//   );
// }

// // export default App;
// const mapStateToProps = (state) => {
//   return { 
//     count: state.count
//   }
// }
// export default connect(mapStateToProps)(App)
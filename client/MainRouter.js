import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Menu from './core/Menu';
const MainRouter = () => {
    return (<div>
      <Menu />
      <h1>Hello this is Moshiur Rahman</h1>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </div>)
}

export default MainRouter
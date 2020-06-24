import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/header/header'
import Error from './components/error/error'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup'
import { auth } from './firebase/firebase'

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user }, () => console.log(user)
      )
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default App;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header'
import Error from './components/error/error'
import HomePage from './pages/homepage/homepage'
import CheckoutPage from './pages/checkout/checkout'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup'
import ShopPage from './pages/shop/shop'

import { GlobalStyle } from './global.styles'

import { auth, createUserProfileDocument } from './firebase/firebase'
import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors'
// import { selectCollectionPreview } from './redux/shop/shop-selectors'
//selectCollectionPreview --use to add shop-data to firebase
//addCollectionAndDocuments --call this method to add shop-data to firebase

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)

      // addCollectionAndDocuments('collections', collectionArray.map(({ title, items }) => ({ title, items })))
      //this is to load shop data to firestore --import from firebase.js
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className="App" >
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() =>
            this.props.currentUser
              ? (<Redirect to="/" />)
              : (<SignInAndSignUp />)
          } />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionPreview //this is to move data to firestore
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

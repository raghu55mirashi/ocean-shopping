import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionPage from '../collection/collection'
import CollectionOverview from '../../components/collection-overview/collection-overview'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase'
import { updateCollections } from '../../redux/shop/shop-actions'
import WithSpinner from '../../components/with-spinner/with-spinner'

const CollectionOverviewSpinner = WithSpinner(CollectionOverview)
const CollectionPageSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshop = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionMap);
            this.setState({ loading: false })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshop()
    }
    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    render={props => <CollectionOverviewSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={props => <CollectionPageSpinner isLoading={loading} {...props} />} />
            </div>)
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
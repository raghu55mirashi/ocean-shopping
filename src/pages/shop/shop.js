import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionPage from '../collection/collection'
import CollectionOverview from '../../components/collection-overview/collection-overview'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase'
import { updateCollections } from '../../redux/shop/shop-actions'

class ShopPage extends Component {
    // unsubscribeFromSnapshop = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionMap);
        })
    }

    componentWillUnmount() {
        // this.unsubscribeFromSnapshop()
    }
    render() {
        const { match } = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>)
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
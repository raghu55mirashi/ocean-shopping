import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview-container'
import CollectionContainer from '../../pages/collection/collection-container'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'


const ShopPage = ({ match, fetchCollectionsStartAsync }) => {

    useEffect(() => {
        fetchCollectionsStartAsync()
    }, [fetchCollectionsStartAsync])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`}
                component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`}
                component={CollectionContainer} />
        </div>)
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)
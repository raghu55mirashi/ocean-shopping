import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors'
import WithSpinner from '../with-spinner/with-spinner'

import CollectionOverview from './collection-overview'


const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching
})
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionsOverviewContainer;
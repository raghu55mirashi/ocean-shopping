import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//below function for collection-overview of shop
export const selectCollectionPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

//below function for category collection of shop
export const selectCollection = collectionUrlParams => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParams]
)
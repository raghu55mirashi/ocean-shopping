import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//below function for all items collection-overview of shop
export const selectCollectionPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

//below function for category wise collection of shop
export const selectCollection = collectionUrlParams => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParams] : null
)
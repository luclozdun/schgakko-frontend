import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './feature/items/itemSlice'

export const store = configureStore({
    reducer: {
        items: itemsReducer
    }
})
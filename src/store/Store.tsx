import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cartSlice'


export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
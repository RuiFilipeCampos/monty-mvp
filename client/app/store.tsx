import { configureStore } from '@reduxjs/toolkit'

import sphereReducer from "../features/sphereSlice"

export const store = configureStore({
  reducer: {
      sphere:sphereReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
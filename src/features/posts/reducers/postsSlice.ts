import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Post } from "../types/Post";
import { RootState } from "src/store";

const initialState: {
  posts: Post[]
} = {
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      prepare(name: string) {
        return {
          payload: {
            id: nanoid(),
            comments: [],
            name,
            active: false,
          },
          meta: {},
          error: {},
        }
      }
    },
    deletePost(state, action: Record<'payload', string>) {
      const postIndex = state.posts.findIndex((post: Post) => action.payload === post.id)
      state.posts.splice(postIndex, 1)
    },
    addComment: {
      reducer(state, action: Record<'payload', { postId: string, id: string, text: string, color: string }>) {
        const { postId, id, text, color } = action.payload
        const postIndex = state.posts.findIndex((post: Post) => postId === post.id)
        state.posts.splice(postIndex, 1, { ...state.posts[postIndex], comments: [...state.posts[postIndex].comments, { id, text, color }] })
      },
      prepare({ postId, text, color }) {
        return {
          payload: {
            id: nanoid(),
            postId,
            text,
            color,
          },
          meta: {},
          error: {},
        }
      }
    },
  }
})

export const selectAllPosts = (state: RootState) => state.posts.posts;

export const { addPost, deletePost, addComment } = postsSlice.actions

export default postsSlice.reducer

import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from 'date-fns';

const POSTS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_APIKEYNEWSAPI}`

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL)
   
    return response.data.articles
})


const initialState = {

    posts: [],
    status: 'idle',
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state,action) => {
            state.status = 'loading'
            
        })
        .addCase(fetchPosts.fulfilled, (state,action) => {  
            state.status = 'succeeded' 
            state.posts = action.payload
          
        })
    }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { reactionAdded } = postsSlice.actions

export default postsSlice.reducer
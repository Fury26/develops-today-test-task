import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { instance } from '../../axios';
import { Post } from '../../helpers/types';
import { AppState } from '../rootReducer';
import * as types from '../types';

export const setError = (err: string): types.ActionType => ({ 
    type: types.SET_ERROR,
    payload: err,

})

export const loadPosts = (count = 10) => async (dispatch) => {
    try {
        let { status, data } = await instance.get<Post[]>('posts');
        data = data.reverse().slice(0, count);
        
        if (status !== 200) {
            dispatch(setError('Error while loading posts'));
        } else {
            dispatch({
                type: types.GET_POSTS,
                payload: data,
            });
            return true;
        }
    } catch (e) {
        console.log(e);
    }
};

export const createPost = (post: Post): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
    try {
        const { status, data } = await instance.post<Post>('posts', post);
        if (status !== 201) {
            dispatch(setError('Error while creating new post'));
        } else {
            dispatch({
                type: types.CREATE,
                payload: data,
            });
            
        }
    } catch (e) {
        console.log(e);
    }
};

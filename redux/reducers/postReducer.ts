import { Post } from '../../helpers/types';
import * as types from '../types';

export type PostState = {
    posts: Post[];
    error: null | string;
};

const initialState: PostState = {
    posts: [],
    error: null,
};

export const postReducer = (state: PostState = initialState, action: types.ActionType): PostState => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case types.CREATE:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

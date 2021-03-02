import { combineReducers } from 'redux';
import { postReducer, PostState } from './reducers/postReducer';

export type AppState = {
    post: PostState;
}

export default combineReducers({
    post: postReducer,
})
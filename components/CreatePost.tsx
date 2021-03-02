import React, { useState } from 'react';
import { Button, CreatePostWrapper, Input, Label, TextArea } from './styled/create-post-styled';
import { createPost } from '../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from './alert';
import { AppState } from '../redux/rootReducer';

type State = {
    message: string;
    title: string;
    body: string;
};

export const CreatePost = () => {
    const [state, setState] = useState<State>({
        message: '',
        title: '',
        body: '',
    });

    const dispatch = useDispatch();
    const err = useSelector((state: AppState) => state.post.error);

    const showMessage = (message: string, delay: number = 2000) => {
        setState((prev) => ({
            ...prev,
            message,
        }));
        setTimeout(() => {
            setState((prev) => ({
                ...prev,
                message: '',
            }));
        }, delay);
    };

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState((prev) => ({
            ...prev,    
            [event.target.name]: event.target.value,
        }));
    };

    const sumbitHandler = async () => {
        if (!state.body.length || !state.title.length) {
            showMessage('All fields are required!');
            return;
        }

        const data = {
            body: state.body,
            title: state.title,
        };

        dispatch(createPost(data));

        
    };

    return (
        <CreatePostWrapper>
            {state.message || err ? <Alert message={state.message ? state.message : err} /> : null}
            <Label>Post title</Label>
            <Input autoComplete="off" name="title" placeholder="Title" value={state.title} onChange={inputHandler} />
            <Label>Text</Label>
            <TextArea
                autoComplete="off"
                name="body"
                placeholder="Write your thoughts"
                value={state.body}
                onChange={e => inputHandler(e)}
            />
            <Button onClick={sumbitHandler}>Publish</Button>
        </CreatePostWrapper>
    );
};
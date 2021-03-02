import React from 'react';
import { Post } from '../helpers/types';
import { AppLayout } from './Layout';
import { PostSpan, PostText, PostTitle, PostWrapper } from './styled/post-styled';

type Props = {
    post: Post;
};

export const PostPage: React.FC<Props> = ({ post }) => {
    return (
        <PostWrapper>
            <PostTitle>
                <PostSpan>{post.id}</PostSpan>
                <PostSpan>{post.title}</PostSpan>
            </PostTitle>
            <PostText> {post.body}</PostText>
        </PostWrapper>
    );
};

import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from '../helpers/types';
import { AppState } from '../redux/rootReducer';
import { Alert } from './alert';
import { PostPage } from './Post';
import { PostsContainer, Button } from './styled/styled';

type Props = {
    posts?: Post[];
};

export const Home: React.FC = () => {
    const router = useRouter();

    const posts = useSelector((state: AppState) => state.post.posts);
    const error = useSelector((state: AppState) => state.post.error);

    const goToPost = (id: number) => {
        router.push(`/posts/${id}`);
    };

    return (
        <PostsContainer>
            {error ? <Alert message={error} /> : null}
            {posts.length !== 0 ? posts.map((post) => {
                console.log(posts[0]);
                
                return (
                    <Button transparent key={post.id} onClick={() => goToPost(post.id)}>
                        <PostPage post={post} />
                    </Button>
            );
            }): null}
        </PostsContainer>
    );
};

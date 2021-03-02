import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import { AlertMessage } from './AlertMessage';
import { PostPage } from './Post';
import { Button, PostsContainer } from './styled/home-styled';

export const Home: React.FC = () => {
    const router = useRouter();

    const posts = useSelector((state: AppState) => state.post.posts);
    const error = useSelector((state: AppState) => state.post.error);

    const goToPost = (id: number) => {
        router.push(`/posts/${id}`);
    };

    return (
        <PostsContainer>
            {error ? <AlertMessage message={error} /> : null}
            {posts.length !== 0
                ? posts.map((post) => {
                      return (
                          <Button key={post.id} onClick={() => goToPost(post.id)}>
                              <PostPage post={post} />
                          </Button>
                      );
                  })
                : null}
        </PostsContainer>
    );
};

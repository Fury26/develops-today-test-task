import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { Post } from '../../helpers/types';
import { PostPage } from '../../components/Post';
import React from 'react';
import { AppLayout } from '../../components/Layout';
import { instance } from '../../axios';
import { ErrorPage } from '../../components/404Page';

type Props = {
    post: Post | null;
};

type Context = GetServerSidePropsContext & { params: { id: string } };

const NextPostPage: NextPage<Props> = ({ post }) => {
    if (!post) {
        return <ErrorPage message={'Could`n find post'} />;
    }

    return (
        <AppLayout title={'Post #' + post.id}>
            <PostPage post={post} />
        </AppLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context: Context) => {
    try {
        const id = context.params.id;

        const post = (await instance.get<Post>(`posts/${id}`)).data;

        return {
            props: {
                post,
            },
        };
    } catch (e) {
        return { props: { post: null } };
    }
};

export default NextPostPage;

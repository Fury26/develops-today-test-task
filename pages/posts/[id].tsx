import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { Post } from '../../helpers/types';
import { PostPage } from '../../components/Post';
import React from 'react';
import { AppLayout } from '../../components/Layout';
import { instance } from '../../axios';
import { Console } from 'node:console';

type Props = {
    post: Post;
};

type Context = GetServerSidePropsContext & { params: { id: string } };

const NextPostPage: NextPage<Props> = ({ post }) => {
    

    return (
        <AppLayout title={'Post #' + post.id}>
            <PostPage post={post} />
        </AppLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context: Context) => {

    const id = context.params.id;
    
    const post = (await instance.get<Post>(`posts/${id}`)).data;

    return {
        props: {
            post,
        },
    };
};

export default NextPostPage;

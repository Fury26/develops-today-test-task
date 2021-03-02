import Head from 'next/head';
import React from 'react';
import { Main, NavBar } from './styled/styled';
import Link from 'next/link';

type Props = {
    title: string;
};

export const AppLayout: React.FC<Props> = (props) => {
    return (
        <>
            <Head>
                <title>Develops Today | {props.title}</title>
            </Head>
            <NavBar>
                <Link href="/posts/new">
                    <a>Create Post</a>
                </Link>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </NavBar>
            <Main>{props.children}</Main>
        </>
    );
};

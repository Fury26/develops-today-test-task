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
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
                    rel="stylesheet"
                />
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

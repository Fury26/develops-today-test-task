import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { BackButton, ErrorContainer, ErrorDiv, ErrorMessage } from './styled/404-styled';

type Props = {
    message: string;
};

export const ErrorPage: React.FC<Props> = ({ message }) => {
    const router = useRouter();

    const backHome = () => {
        router.push('/');
    };

    return (
        <ErrorContainer>
            <ErrorDiv>
                <ErrorMessage>{message}</ErrorMessage>
                <BackButton onClick={backHome}>Home</BackButton>
            </ErrorDiv>
        </ErrorContainer>
    );
};

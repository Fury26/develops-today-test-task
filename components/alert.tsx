import React from 'react';
import { AlertContainer } from './styled/alert-styled';

type Props = {
    message: string;
};

export const Alert: React.FC<Props> = ({ message }) => {
    return (
        <AlertContainer>
            <span>{message}</span>
        </AlertContainer>
    );
};

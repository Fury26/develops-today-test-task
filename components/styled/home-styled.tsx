import styled from 'styled-components';

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    background: none;
    transition: 0.5s;
    width: 90%;
    margin: 0 auto;
    &:hover {
        transform: scale(1.01);
    }
`;

import styled from 'styled-components';
import { AppTheme } from './styled';

export const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const ErrorDiv = styled.div`
    width: 50%;
    height: 30%;
    margin: 100px auto;
    border-radius: 4px;
    padding: 10px;
    background-color: ${(props) => (props.theme as AppTheme).secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ErrorMessage = styled.h1`
    text-transform: uppercase;
    font-weight: bold;
    color: black;
`;

export const BackButton = styled.button`
    border: none;
    outline: none;
    border-radius: 2px;
    width: auto;
    height: auto;
    padding: 10px;
    font-size: 2rem;

    background-color: ${(props) => (props.theme as AppTheme).background};
    color: ${(props) => (props.theme as AppTheme).secondary};
    cursor: pointer;

    transition: 0.4s;

    &:hover {
        background-color: ${(props) => (props.theme as AppTheme).secondary};
        color: ${(props) => (props.theme as AppTheme).background};
    }
`;

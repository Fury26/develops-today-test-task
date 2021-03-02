import styled from "styled-components";
import { AppTheme } from "./styled";

export const Label = styled.label`
    padding: 5px;
    font-size: 3rem;

`;

export const TextArea = styled.textarea`
    font-size: 2rem;
    outline: none;
    resize: none;

    border: 1px solid #2c2f33;
    border-radius: 2px;
    height: 50vh;
    transition: 0.3s;
    &:focus {
        border-color: #7289da;
    }
`;

export const Input = styled.input`
    font-size: 2rem;
    outline: none;

    overflow: hidden;
    border: none;
    border-bottom: 1px solid #2c2f33;
    transition: 0.3s;
    &:focus {
        border-color: #7289da;
    }
`;

export const CreatePostWrapper = styled.div`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #7289da;
    margin-top: 20px;
    width: 200px;
    height: 100px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    transition: .3s;
    cursor: pointer;
    &:hover {
        border-radius: 2px;
        background-color: #1a43d6;
    }
`;
import { createGlobalStyle } from 'styled-components';
import { AppTheme } from './styled';

export default createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => (props.theme as AppTheme).background};
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        outline: 0;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        font-family: 'Roboto', sans-serif;
    }

`;

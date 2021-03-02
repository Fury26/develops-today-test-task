import styled from 'styled-components';
import { AppTheme } from './styled';

export const AlertContainer = styled.div`
    background: ${(props) => (props.theme as AppTheme).navbar.background};
    width: 100%;
    height: auto;
    padding: 10px;
    margin: 10px;

    span {
        padding: 5px;
        font-weight: bold;
    }
`;

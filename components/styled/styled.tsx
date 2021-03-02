import styled from 'styled-components';

export type AppTheme = {
    background: string;
    navbar: {
        background: string;
    };
    secondary: string;
};

export const Main = styled.main`
    width: 100vw;
    height: auto;
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => (props.theme as AppTheme).navbar.background};
    width: 100vw;
    height: 10vh;
    position: sticky;
    top: 0;
    margin: 0 auto;
    z-index: 100;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #23272a;
    }
`;

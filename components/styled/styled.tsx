import styled from 'styled-components';

type Props = {
    transparent?: boolean;
};

export type AppTheme = {
    background: string;
    navbar: {
        background: string;
    };
};


export const Button = styled.button<Props>`
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

export const Main = styled.main`
    width: 100vw;
    height: auto;
`;

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
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

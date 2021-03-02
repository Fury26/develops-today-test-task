import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { BackButton, ErrorContainer, ErrorDiv, ErrorMessage } from '../components/styled/404-styled';

const ErrorPage: NextPage = () => {
    const router = useRouter();

    const backHome = () => {
        router.push('/');
    };

    return (
        <ErrorContainer>
            <ErrorDiv>
                <ErrorMessage>Here is error page</ErrorMessage>
                <BackButton onClick={backHome}>Home</BackButton>
            </ErrorDiv>
        </ErrorContainer>
    );
};

export default ErrorPage;

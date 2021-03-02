import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ErrorPage } from '../components/404Page';

const NextErrorPage: NextPage = () => {
    const router = useRouter();

    const backHome = () => {
        router.push('/');
    };

    return <ErrorPage message={'Page is not found'} />;
};

export default NextErrorPage;

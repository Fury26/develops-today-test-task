import { useDispatch } from 'react-redux';
import { AppLayout } from '../components/Layout';
import { loadPosts } from '../redux/actions/postActions';
import { NextPage } from 'next';
import { Home } from '../components/HomePage';

const HomePage: NextPage = () => {
    const dispatch = useDispatch();
    dispatch(loadPosts());

    return (
        <AppLayout title="Home">
            <Home />
        </AppLayout>
    );
};

export default HomePage;

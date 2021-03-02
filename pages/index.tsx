import { useDispatch, useSelector } from 'react-redux';
import { AppLayout } from '../components/Layout';
import { loadPosts } from '../redux/actions/postActions';
import { Home } from '../components/Home';
import { NextPage } from 'next';

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

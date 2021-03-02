import { useDispatch, useSelector } from 'react-redux';
import { AppLayout } from '../components/Layout';
import { loadPosts } from '../redux/actions/postActions';
import { Home } from '../components/home';
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

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

//     return {
//         props: {},
//     };
// };

export default HomePage;

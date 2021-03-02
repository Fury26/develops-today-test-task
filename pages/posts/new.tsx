import { NextPage } from "next";
import { CreatePost } from "../../components/CreatePost";
import { AppLayout } from "../../components/Layout";

const CreatePostPage: NextPage = () => {
    return (
        <AppLayout title="Create">
            <CreatePost />
        </AppLayout>
    );
}


export default CreatePostPage;
import { api } from '../services/api';
import PostForm from '../components/PostForm';

const CreatePostPage = () => {
    const handleSubmit = async (data) => {
        await api.post('/posts', data);
    };

    return (
        <div>
            <h2>Créer un nouvel article</h2>
            <PostForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreatePostPage;

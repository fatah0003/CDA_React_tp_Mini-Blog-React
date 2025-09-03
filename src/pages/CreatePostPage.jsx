import { api } from '../services/api';
import PostForm from '../components/PostForm';

const CreatePostPage = () => {
    const handleSubmit = async (data) => {
        const res = await api.post('/posts', data);
        console.log('Post créé:', res.data);
        alert('Article créé !');
    };

    return (
        <div>
            <h2>Créer un nouvel article</h2>
            <PostForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreatePostPage;

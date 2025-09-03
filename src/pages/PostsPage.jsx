import { useEffect, useState } from 'react';
import { api } from '../services/api';
import PostCard from '../components/PostCard';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await api.get('/posts');
                setPosts(res.data);
            } catch (err) {
                console.error('Erreur :', err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Liste des articles</h2>
            {posts.slice(0, 10).map((p) => (
                <PostCard key={p.id} post={p} />
            ))}
        </div>
    );
};

export default PostsPage;

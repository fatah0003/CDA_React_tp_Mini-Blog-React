import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';

const PostDetailPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await api.get(`/posts/${id}`);
                setPost(res.data);
            } catch (err) {
                console.error('Erreur lors du chargement :', err);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) return <p>Chargement...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetailPage;

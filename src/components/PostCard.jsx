import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem 0' }}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}...</p>
        <Link to={`/post/${post.id}`}>Lire la suite</Link>
    </div>
);

export default PostCard;

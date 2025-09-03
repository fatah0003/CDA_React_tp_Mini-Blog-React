import { useState } from 'react';

const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, body });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea
                placeholder="Contenu"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Publier</button>
        </form>
    );
};

export default PostForm;

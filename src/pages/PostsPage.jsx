// PostsPage.jsx
import { useEffect, useState } from "react";
import { api } from "../services/api";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get("/posts");
      const apiPosts = res.data.slice(0, 10); // limite à 10

      const localPosts = JSON.parse(localStorage.getItem("posts") || "[]");

      // Fusionne les deux (local d'abord pour les voir en haut)
      setPosts([...localPosts, ...apiPosts]);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Liste des articles</h2>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
};

export default PostsPage;

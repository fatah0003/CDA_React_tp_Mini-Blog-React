import { api } from "../services/api";
import PostForm from "../components/PostForm";

const CreatePostPage = () => {
  const handleSubmit = async (data) => {
    // Appel API 
    await api.post("/posts", data);
    alert("post ajouté avec succés")

    // Récupère les posts du localStorage
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");

    // Ajoute le nouveau post
    const newPost = { ...data, id: Date.now() };
    localStorage.setItem("posts", JSON.stringify([...savedPosts, newPost]));
  };

  return (
    <div>
      <h2>Créer un nouvel article</h2>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePostPage;

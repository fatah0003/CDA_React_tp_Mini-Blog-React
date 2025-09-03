import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<PostsPage />} />
                <Route path="/post/:id" element={<PostDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;

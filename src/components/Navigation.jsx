import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <NavLink to="/">Posts</NavLink> | <NavLink to="/create">ajouter un poste</NavLink>
    </nav>
);

export default Navigation;

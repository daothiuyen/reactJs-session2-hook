import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/timer" activeClassName="active">Timer Apps</NavLink>
            <NavLink to="/todo" activeClassName="active">Todo Apps</NavLink>
            <NavLink to="/blog" activeClassName="active">Blog Apps</NavLink>
            <NavLink to="/secret" activeClassName="active">Secret</NavLink>
        </div>
    )
}

export default Nav;
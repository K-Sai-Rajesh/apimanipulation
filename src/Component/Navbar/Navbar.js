import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand">Navbar</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 m-2 justify-content-center">
                <li className="nav-item">
                    <Link to='/' className='link' >Home</Link>
                </li>&emsp;
                <li className="nav-item">
                    <Link to='/about' className='link' >About</Link>
                </li>&emsp;
                <li className="nav-item dropdown">
                <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                    <li></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li></li>
                </ul>
                </li>
                <li className="nav-item">
                    <Link to='/post' className='link' >Post</Link>&emsp;
                </li>
                <li>
                    <Link to='/user' className='link' >Users</Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}
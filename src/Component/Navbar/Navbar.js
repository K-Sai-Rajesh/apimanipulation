import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"
import './Navbar.css'
import {ImHome} from 'react-icons/im'
import {FaCommentMedical, FaUsers} from 'react-icons/fa'
import {TbLetterCaseToggle} from 'react-icons/tb'

export const Navbar = () => {

    const data = useContext(AppContext)

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
                    <Link to='/' className='link' > <ImHome style={{fontSize:'25px'}} /></Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                    <Link to='/about' className='link' ><TbLetterCaseToggle style={{fontSize:'25px'}} /></Link>
                </li>&emsp;&emsp;
                <li className="nav-item dropdown">
                <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                    <li></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li></li>
                </ul>
                </li>
                <li className="nav-item">
                    <Link to='/posts' className='link' ><FaCommentMedical style={{fontSize:'25px'}} /> {data.posts.length}</Link>&emsp;&emsp;
                </li>
                <li>
                    <Link to='/users' className='link' ><FaUsers style={{fontSize:'25px'}} /> {data.users.length}</Link>&emsp;&emsp; 
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
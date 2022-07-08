import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"
import './Navbar.css'
import {ImHome} from 'react-icons/im'
import {FaCommentMedical, FaUsers} from 'react-icons/fa'
import {TbLetterCaseToggle} from 'react-icons/tb'
import {RiLoginCircleLine,RiLogoutCircleLine} from 'react-icons/ri'

export const Navbar = () => {

    const data = useContext(AppContext)

    function Logout(){
        data.setLogged(false)
    }

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
                {
                    data.logged ? 
                    <>
                        <li className="nav-item">
                            <Link to='/posts' className='link' ><FaCommentMedical style={{fontSize:'25px'}} /> {data.posts.length}</Link>&emsp;&emsp;
                        </li>
                        <li>
                            <Link to='/users' className='link' ><FaUsers style={{fontSize:'25px'}} /> {data.users.length}</Link>&emsp;&emsp; 
                        </li>
                        <li>
                            <Link to='/login' className='link' onClick={Logout} ><RiLogoutCircleLine style={{fontSize:'25px'}} /></Link>&emsp;&emsp; 
                        </li>
                    </>
                    : 
                    <>
                        <li>
                            <Link to='/login' className='link' ><RiLoginCircleLine style={{fontSize:'25px'}} /></Link>&emsp;&emsp; 
                        </li>
                    </>
                }
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
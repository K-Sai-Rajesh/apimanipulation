import { useContext, useEffect, useState } from "react"
import {FiEdit} from 'react-icons/fi'
import { FaRegSadTear, FaUserPlus } from 'react-icons/fa'
import {MdOutlinePostAdd} from 'react-icons/md'
import {TiUserDelete} from 'react-icons/ti'
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"

export const Users = () => {

    const data = useContext(AppContext)
    const [state, setState] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {

        try{
                if(data.usersCalled){
                    setState(data.users)
                }else{
                    fetch("http://localhost:3000/users",{
                        method:'GET'
                    })
                    .then(response => response.json())
                    .then(resData => {
                        data.setUsers(resData)
                        setState(resData)
                    })
                    .catch(error => console.log(error))
                }

        }catch(e){
            console.log(e)
        }

    },[])

    function DeleteUser(id){
        console.log(id)
        try{
                fetch(`http://localhost:3000/users/${id}`,{
                    method:'DELETE'
                })
                .then(response => response.json())
                .then(resData => {
                    console.log(resData)
                    window.location.reload()
                })
                .catch(error => console.log(error))

        }catch(e){
            console.log(e)
        }
    }

    function Display(){
       if(state.length === 0)
            return(
                <>
                    <h1>No Entries Found..</h1>
                </>
            )
       else
            return(
                <>
                {
                    state.map((user) => {
                        return(
                            <div key={user.id} className="col-12 p-3 card col-sm-6 col-lg-4">
                                <h4>{user.FullName}</h4>
                                <h6>User_Id : {user.id}</h6>
                                <h6>{user.Email}</h6>
                                <div>
                                    <button className="btn btn-info rounded-circle" onClick={() => navigate(`/users/update/${user.id}`)} ><FiEdit /></button> &emsp;
                                    <button className="btn btn-success rounded-circle" onClick={() => navigate(`/posts/new/${user.id}`)}><MdOutlinePostAdd/></button>&emsp;
                                    <button className="btn btn-danger rounded-circle" onClick={() => DeleteUser(user.id)}><TiUserDelete/></button>
                                </div>
                            </div>
                        )
                    })
                }
                </>
            )
       
    }

    return(
        <div className="container">
            <div className="row justify-content-around mt-5">
                <button className="btn btn-success" onClick={() => navigate(`/users/new`)}><FaUserPlus/></button>
            </div>
            <div className="row justify-content-around mt-5">
            {
                state !== null ? Display() : <h1>Data is Being Fetched...</h1>
            }
            </div>
        </div>
    )
}
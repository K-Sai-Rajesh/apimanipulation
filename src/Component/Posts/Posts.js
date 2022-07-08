import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"
import { useNavigate } from "react-router-dom"
import {MdOutlinePostAdd} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {MdOutlineDeleteOutline} from 'react-icons/md'

export const Posts = () => {

    const data = useContext(AppContext)
    const [state,setState] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {

        try{

                fetch("http://localhost:3000/posts",{
                    method:'GET'
                })
                .then(response => response.json())
                .then(resData => {
                    data.setPosts(resData)
                    setState(resData)
                })
                .catch(error => console.log(error))

        }catch(e){
            console.log(e)
        }

    },[])

    function DeleteUser(id){
        console.log(id)
        try{
                fetch(`http://localhost:3000/posts/${id}`,{
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
                state.map((post) => {
                    return(
                        <div key={post.id} className="col-12 p-3 card col-sm-6 col-lg-4">
                            <h6 className="text-end" style={{fontSize:'9px',fontWeight:'bolder'}}>Posted By User : {post.UserID}</h6>
                            <h4>{post.title}</h4>
                            <p>{post.post}</p> 
                            <div>
                                <button className="btn btn-info rounded-circle" onClick={() => navigate(`/posts/update/${post.id}`)} ><FiEdit /></button>&emsp;
                                    <button className="btn btn-danger rounded-circle" onClick={() => DeleteUser(post.id)}><MdOutlineDeleteOutline/></button>
                            </div>
                            <h6 className="text-end" style={{fontSize:'9px',fontWeight:'bolder'}}>On : {post.at.date}</h6>
                            <h6 className="text-end" style={{fontSize:'9px',fontWeight:'bolder'}}>at : {post.at.time}</h6>
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
            {
                state !== null ? Display() : <h1>Data is Being Fetched...</h1>
            }
            </div>
        </div>
    )
}

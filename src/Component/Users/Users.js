import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Users = () =>{

    const [state,setState] = useState(null)
    const [edit,setEdit] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        try{

            fetch('http://localhost:3000/Users')
            .then((response) => response.json())
            .then((data) => setState(data) )
            .catch((error) => console.log(error))
            
        }catch(e){
            console.log(e)
        }
    },[])

    function Add(){
        try{

            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setState(data) )
            .catch((error) => console.log(error))
            
        }catch(e){
            console.log(e)
        }
    }

    function Delete(id){
        try{
            console.log(id)
            fetch(`http://localhost:3000/Users/${id}`,{
                method:"DELETE",
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error ))

            window.location.reload()
            
        }catch(e){
            console.log(e)
        }
    }

    function Display(){
        return(
            <>
            {
                state.map((user) => {
                    return(
                        <div key={user.id} className="card p-3 shadow col-12 col-sm-4 col-3">
                            <h1>{user.id} : {user.name}</h1>
                            <h6>Username : {user.username}</h6>
                            <h5>Email : {user.email}</h5>
                            <h6>Website : {user.website}</h6>
                            <div>
                                <button className="btn btn-success" onClick={() => Delete(user.id)}>Delete</button>&emsp;
                                <button className="btn btn-success" onClick={() => navigate(`/post/new/${user.id}`)}>Post</button>    
                            </div>                 
                        </div>
                    )
                })
            }
            </>
        )
    }

    return(
        <>
        <div className="container">
            <div className="row justify-content-around">
            {
                state !== null? Display() : <h1>Data is Not Fetched Yet</h1>
            }
            </div>
        </div>
        </>
    )
}

{/* <div className="card shadow mt-2 mb-2 text-center p-5 col-12 col-sm-6 col-lg-8">
                        <h5>User</h5>
                        <h6>Post</h6><br/>
                        {
                            edit ? <input placeholder="Title" maxLength={15} className="form-control" onChange={(e) => {
                                let newState = state
                                newState.title = e.target.value
                                setState(newState)
                            }} /> : <h6>Title</h6>
                        }<br/>
                        {
                            edit ? <input placeholder="Post" maxLength={50} className="form-control" onChange={(e) => {
                                let newState = state
                                newState.body = e.target.value
                                setState(newState)
                            }} /> : <p></p>
                        }
                    </div> 
                
                        {
                            edit ? <button className="btn btn-tranparent border border-1 shadow" onClick={() => setEdit(false)}>Done</button> : <button className="btn btn-tranparent border border-1 shadow" onClick={() => setEdit(true)}>Edit</button>
                        }&emsp;
                        <button className="btn btn-success" onClick={() => Add()}>Add</button>&emsp;
                        <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
                */}



    
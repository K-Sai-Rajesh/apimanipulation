import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"

export const EditPost = () => {

    const params = useParams()
    const gState = useContext(AppContext)
    const navigate = useNavigate()
    const [state,setState] = useState(null)
    const [edit,setEdit] = useState(false)

    useEffect(()=>{
        if(gState.state !== undefined) {
            for(let item of gState.state) if(item.id === parseInt(params.PostId)) setState(item)
        }
    },[gState.state])

    function Update(){
        try{
            console.log(state)
            fetch(`https://jsonplaceholder.typicode.com/posts`,{
                method: 'POST',
                body: JSON.stringify({
                    id : 100,
                    title : state.title,
                    body : state.body,
                    userId : state.userId
                }),
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                }
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.log(error)
            })

        }catch(e){
            console.log(e)
        }
    }

    function Display(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card shadow mt-2 mb-2 text-center p-5 col-12 col-sm-6 col-lg-8">
                        <h5>User : {state.userId}</h5>
                        <h6>Post : {state.id}</h6><br/>
                        {
                            edit ? <input placeholder="Title" maxLength={15} className="form-control" onChange={(e) => {
                                let newState = state
                                newState.title = e.target.value
                                setState(newState)
                            }} /> : <h6>Title : {state.title}</h6>
                        }<br/>
                        {
                            edit ? <input placeholder="Post" maxLength={50} className="form-control" onChange={(e) => {
                                let newState = state
                                newState.body = e.target.value
                                setState(newState)
                            }} /> : <p>{state.body}</p>
                        }
                    </div>
                    <div className="col-12 col-sm-6">
                        {
                            edit ? <button className="btn btn-tranparent border border-1 shadow" onClick={() => setEdit(false)}>Done</button> : <button className="btn btn-tranparent border border-1 shadow" onClick={() => setEdit(true)}>Edit</button>
                        }&emsp;
                        
                        <button className="btn btn-success" onClick={Update}>Update</button>&emsp;
                        <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
        {
            state !== null ? Display() : <h1>Data is not Available</h1>
        }
        </>
    )
}
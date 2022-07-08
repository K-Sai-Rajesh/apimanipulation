import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {BiArrowBack} from 'react-icons/bi'
import { AppContext } from "../../AppContext/AppContext"

export const NewPost = () => {

    const params = useParams()
    const [state, setState] = useState({
        UserID : params.id,
        title : null,
        post : null,
        at : {
            date : `${(new Date()).getDate()}/${(new Date()).getMonth()}/${(new Date()).getFullYear()}`,
            time : `${(new Date()).getHours()}:${(new Date()).getMinutes()}`
        }
    })
    const gstate = useContext(AppContext)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        try{

            fetch("http://localhost:3000/posts",{
                method: 'Post',
                body:JSON.stringify(state),
                headers :{
                    'Content-type' : 'Application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                gstate.setPosts([...gstate.users,data])
                navigate('/posts')
            })
            .catch(error => console.log(error))

        }catch(e){
            console.log(e)
        }
    }

    function handleChange(e){        
            let obj = state
            obj[`${e.target.name}`] = e.target.value
            setState(obj)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 card p-5">
                    <div className="row g-3" >
                        <div className="col-12">
                            <h1>What's on Your Mind !</h1>
                        </div>
                        <div className="col-12 d-flex flex-row justify-content-start align-items-center">
                            <label>User Id</label>&emsp;
                            <input  type="text" readOnly disabled value={params.id}
                                    maxLength={15} className="form-control w-25" required/>
                        </div>
                        <div className="mb-3">
                            <input type="text" maxLength={20} className="form-control" id="exampleFormControlInput1" name="title" placeholder="Title" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" maxLength={100} id="exampleFormControlTextarea1" rows="3" name="post" placeholder="Post" onChange={handleChange}></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Post</button>&emsp;
                            <button className="btn btn-primary" onClick={() => navigate(-1)} ><BiArrowBack /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
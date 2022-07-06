import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"

export const Posts = () => {

    const url1 = "http://localhost:3000/Post"
    const gState = useContext(AppContext)

    const [state, setState] = useState(null)
    const navigate = useNavigate()

    const Fetch = async () => {

        try{

            const data = await axios.get(url1)
            setState(data.data)
            console.log(data.data)
            gState.setState(data.data)

        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {  
        Fetch()
    },[])

    function Display(){
        return(
            <>
            {
                state.map((post) => {
                    return(
                        <tr key={post.id}>
                            <td colSpan={3}>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => {
                                    navigate(`/post/${post.id}`)
                                }} >Edit</button>
                                <button className="btn btn-success" onClick={() => {
                                    navigate(`/post/new/${post.id}`)
                                }} >Post</button>
                            </td>
                        </tr>
                    )
                })
            }
            </>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className="text-center">
                                <th colSpan={3}>UID</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Post</th>
                                <th>Alter</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                state !== null ? Display() : <tr><td>Data is Being Fetched</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}
import { useState } from "react"
import { useParams } from "react-router-dom"

export const NewPost = () => {

    const param = useParams()
    const [Post,setPost] = useState({
        title : null,
        post : null
    })

    console.log(param)

    function NewPost(){
        try{

            fetch("http://localhost:3000/Post")
            .then((response) => response.json())
            .then((data) => {

                console.log(data.length)
                let post = Post
                post.postId = data.length + 1
                post.UserId = parseInt(param.UserId)  

                console.log(post)
                
                fetch("http://localhost:3000/Post",{
                    method: "POST",
                    body: JSON.stringify(post),
                    headers: {
                        "Content-type" : "application/json"
                    }
                })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error))



            })
            .catch((error) => console.log(error))

        }catch(e){
            console.log(e)
        }
    }

    return(
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12">
                    <div className="card w-100 shadow">
                        <div className="card-body">
                            <h5 className="card-title">What's in your Mind Today !</h5>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                            <div className="input-group mb-3 mt-3">
                                <span className="input-group-text" id="basic-addon3">Title</span>
                                <input type="text" maxLength={10} className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={(e) => {
                                    let post = Post
                                    post.title = e.target.value
                                    setPost(post)
                                    console.log(post)
                                }} />
                            </div>
                            <div className="input-group mt-3">
                                <span className="input-group-text">Post</span>
                                <textarea className="form-control" maxLength={50} aria-label="With textarea" onChange={(e) => {
                                    let post = Post 
                                    post.post = e.target.value
                                    setPost(post)
                                    console.log(post)
                                }} ></textarea>
                            </div>
                            <button className="btn btn-success mt-3" onClick={NewPost} >Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
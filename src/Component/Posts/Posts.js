import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"

export const Posts = () => {

    const data = useContext(AppContext)
    const [state,setState] = useState(null)
    
    useEffect(() => {

        try{

            if(data.postsCalled){
                setState(data.posts)
            }else{
                fetch("http://localhost:3000/post",{
                    method:'GET'
                })
                .then(response => response.json())
                .then(resData => {
                    data.setPosts(resData)
                    data.setPostsCalled(true)
                    setState(resData)
                })
                .catch(error => console.log(error))
            }

        }catch(e){
            console.log(e)
        }

    },[data.postsCalled])

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
                        <div key={post.postId} className="col-12 p-3 card col-sm-6 col-lg-4">
                            <h4>{post.title}</h4>
                            <p>{post.post}</p>
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
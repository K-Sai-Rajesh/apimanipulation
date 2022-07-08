import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"

export const Profile = () => {

    const data = useContext(AppContext)
    const [state,setState] = useState(null)
    useEffect(() => {
        try{

            fetch(`http://localhost:3000/users/${data.userId}`)
            .then(res => res.json())
            .then(data => setState(data))
            .catch(e => console.log(e))

        }catch(e){
            console.log(e)
        }
    },[])


    return(
        <>
        <h1>Profile</h1> 
        {
            state !== null ?
            <>
            <h1>{state.id}</h1>
            <h4>{state.FullName}</h4>
            </>
            : <h1>Please Wait....</h1>
        }   
        </>
    )
}
import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppState = (props) => {

    const [users,setUsers] = useState([])
    const [posts,setPosts] = useState([])
    const [logged,setLogged] = useState(false)
    const [userId,setUserId] = useState(null)

    return(
        <AppContext.Provider value={{users,posts,logged,userId,setUserId, setUsers,setPosts,setLogged}} >
            {
                props.children
            }
        </AppContext.Provider>
    )
    
}
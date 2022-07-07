import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppState = (props) => {

    const [users,setUsers] = useState([])
    const [usersCalled,setUsersCalled] = useState(false)
    const [posts,setPosts] = useState([])
    const [postsCalled,setPostsCalled] = useState(false)

    return(
        <AppContext.Provider value={{users,usersCalled,posts,postsCalled, setUsers,setPosts,setPostsCalled,setUsersCalled}} >
            {
                props.children
            }
        </AppContext.Provider>
    )
    
}
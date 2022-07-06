import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppState = (props) => {

    const [state,setState] = useState(null)

    return(
        <AppContext.Provider value={{state, setState}} >
            {
                props.children
            }
        </AppContext.Provider>
    )
    
}
import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"

export const Login = () => {

    const data = useContext(AppContext)
    const [state,setState] = useState({
        Username : null,
        Password : null,
        Error : null
    })
    const navigate = useNavigate()

    console.log(data)

    function handleChange(e){
        let obj = state
        obj[`${e.target.name}`] = e.target.value
        setState(obj)
        console.log(obj)
    }
    function handleSubmit(){
        try{

            axios.get(`http://localhost:3000/users?Email=${state.Username}&&Password=${state.Password}`)
            .then(res => {
                if(res.data !== [] ){
                    data.setLogged(true)
                    console.log(res.data[0])
                    data.setUserId(res.data[0].id)
                    navigate('/profile')
                }
            })
            .catch(error => console.log(error))

        }catch(e){
            console.log(e)
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 card p-5">
                    <div className="row g-3" >
                        <div className="col-12 text-center">
                            <h1>Login</h1>
                        </div>
                        <div className="col-12 d-flex flex-row justify-content-start align-items-center">
                            <input  type="text" name="Username"
                                    maxLength={20} className="form-control" 
                                    onChange={handleChange}
                                    placeholder='User Id'
                                    required/>
                        </div>
                        <div className="mb-3">
                            <input  type='password' onChange={handleChange} 
                                    maxLength={20} className="form-control" name="Password" placeholder="Password"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                            <p>{state.Error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
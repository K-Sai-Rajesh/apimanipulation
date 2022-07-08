import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {BiArrowBack} from 'react-icons/bi'
import { AppContext } from "../../AppContext/AppContext"

export const NewUser = () => {

    const params = useParams()
    const [state, setState] = useState({
        FullName : null,
        Phone : null,
        Email : null,
        Password : null,
        Address : {
            street : null,
            house : null,
            city : null,
            state : null, 
            zip : null
        }
    })
    const gstate = useContext(AppContext)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        try{

            fetch("http://localhost:3000/users",{
                method: 'Post',
                body:JSON.stringify(state),
                headers :{
                    'Content-type' : 'Application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                gstate.setUsers([...gstate.users,data])
                navigate('/users')
            })
            .catch(error => console.log(error))

        }catch(e){
            console.log(e)
        }
    }

    function handleChange(e){        
        if(e.target.name.split("_").length == 1 ){
            let obj = state
            obj[`${e.target.name}`] = e.target.value
            setState(obj)
        }
        else if(e.target.name.split("_").length == 2 ){
            let obj = state
            obj[`${e.target.name.split("_")[0]}`][`${e.target.name.split("_")[1]}`] = e.target.value
            setState(obj)
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 card p-5">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12">
                            <h1 className="text-center">Add New User</h1>
                        </div>
                        <div className="col-12">
                            <h1>User Details</h1>
                        </div>
                        <div className="col-md-6">
                            <input  type="text" name="FullName"
                                    onChange={handleChange}
                                    placeholder="Full Name (15 Characters)" maxLength={15} className="form-control" required/>
                        </div>
                        <div className="col-md-6">
                            <input  type="tel" name='Phone'
                                    onChange={handleChange}
                                    pattern={"[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"} placeholder="Phone Number" maxLength={10} className="form-control" required/>
                        </div>
                        <div className="col-md-6">
                            <input  type="email" name="Email"
                                    onChange={handleChange} maxLength={20}
                                    placeholder="Email" className="form-control" required/>
                        </div>
                        <div className="col-md-6">
                            <input  type="password" name="Password"
                                    onChange={handleChange} maxLength={15}
                                    placeholder="Password" className="form-control" required/>
                        </div>
                        <div className="col-12">
                            <input  type="text" name="Address_street" maxLength={20}
                                    onChange={handleChange}
                                    className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <input  type="text" name="Address_house" maxLength={20}
                                    onChange={handleChange}
                                    className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <input  type="text" name="Address_city"
                                    onChange={handleChange}
                                    className="form-control" maxLength={15} id="inputCity" placeholder="city" required />
                        </div>
                        <div className="col-md-4">
                            <select id="inputState" name="Address_state"
                                    onChange={handleChange}
                                    className="form-select" required>
                                <option defaultValue={null}>State</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Odissa">Odissa</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <input  type="tel" maxLength={6} pattern={'[0-9][0-9][0-9][0-9][0-9][0-9]'}
                                    onChange={handleChange} name='Address_zip'
                                    className="form-control" id="inputZip" placeholder="Zip" required/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" >Sign Up</button>&emsp;
                            <button className="btn btn-primary" onClick={() => navigate(-1)} ><BiArrowBack /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
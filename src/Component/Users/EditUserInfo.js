import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContext'
import {GrUpdate} from 'react-icons/gr'
import {BiArrowBack} from 'react-icons/bi'

export function EditUserInfo() {

    const data = useContext(AppContext)
    const params = useParams()
    const [state, setState] = useState(null)  
    const navigate = useNavigate()


    useEffect(() => { 
      if(data.users !== undefined) 
        data.users.map((user) => {
          if(user.id === parseInt(params.userid)) setState(user)
        })

    },[data.users])

    function handleChange(e){
      console.log(e.target.value)
      
      if(e.target.name.split("_").length == 1 ){
        console.log(state)
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

    function handleSubmit(e){
      e.preventDefault()

      try{
           fetch(`http://localhost:3000/users/${params.userid}`,{
               method: 'Put',
               body:JSON.stringify(state),
               headers :{
                   'Content-type' : 'Application/json'
               }
           })
          .then(response => response.json())
          .then(data => {console.log(data) 
            navigate('/users')
          })
          .catch(error => console.log(error))

      }catch(e){
          console.log(e)
      }
    } 

    function Display(){
      return(
            <>
            <div key={state.UserID} className="col-12 p-3 card">
            <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12">
                            <h1>Edit</h1>
                        </div>
                        <div className="col-12 d-flex flex-row justify-content-start align-items-center">
                            <label>User Id</label>&emsp;
                            <input  type="text" readOnly disabled value={state.id}
                                    maxLength={15} className="form-control w-25" required/>
                        </div>
                        <div className="col-md-6">
                            <input  type="text" name="FullName"
                                    onChange={handleChange}
                                    placeholder={state.FullName} maxLength={15} className="form-control" required/>
                        </div>
                        <div className="col-md-6">
                            <input  type="tel" name='Phone'
                                    onChange={handleChange}
                                    pattern={"[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"} placeholder={state.Phone} maxLength={10} className="form-control" required/>
                        </div>
                        <div className="col-md-6">
                            <input  type="email" name="Email"
                                    onChange={handleChange} maxLength={20}
                                    placeholder={`${state.Email}`} className="form-control" required/>
                        </div>
                        <div className="col-md-6">
                            <input  type="password" name="Password"
                                    onChange={handleChange} maxLength={15}
                                    placeholder={state.Password} className="form-control" required/>
                        </div>
                        <div className="col-12">
                            <input  type="text" name="Address_street" maxLength={20}
                                    onChange={handleChange}
                                    className="form-control" id="inputAddress" placeholder={state.Address.street} />
                        </div>
                        <div className="col-12">
                            <input  type="text" name="Address_house" maxLength={20}
                                    onChange={handleChange}
                                    className="form-control" id="inputAddress2" placeholder={state.Address.house} />
                        </div>
                        <div className="col-md-6">
                            <input  type="text" name="Address_city"
                                    onChange={handleChange}
                                    className="form-control" maxLength={15} id="inputCity" placeholder={state.Address.city} required />
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
                                    className="form-control" id="inputZip" placeholder={state.Address.zip} required/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" ><GrUpdate /></button>&emsp;
                            <button type="submit" className="btn btn-primary" onClick={() => navigate(-1)} ><BiArrowBack /></button>
                        </div>
                    </form>
            </div>     
            </>
        )
    }

    return (
    <div className='container'> 
      <div className='row mt-5'>
        {
          state !== null ? Display() : <h1>Data is Being Fetched...</h1>
        }
      </div>
    </div>
  )
}

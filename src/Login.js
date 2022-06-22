import React, {useState} from 'react'

const Login = () => {
    const [data,setData] = useState({
        Username: " ",
        Password: " "
    })
    const {Username,Password} = data;
    const changeHandler = e =>{
        setData ({...data,[e.target.name]:e.target.value })
    }
    const submitHandler = e =>{
        e.preventDefault();
    }
  return (
    <div>
        <center>
      <from onSubmit= {submitHandler}>
          <h2>Login Page</h2> 

         <input type="text" name="Username" value={Username} onChange={changeHandler}/><br></br><br></br>
         <input type="Password" name="Password" value={Password} onChange={changeHandler}/> <br></br>
        <button type='submit'>Login</button>

      </from>
        </center>
    </div>
  )
}

export default Login
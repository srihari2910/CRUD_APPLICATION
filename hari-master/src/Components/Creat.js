import {API_URL} from '../Url/Url';
import {Form,Button,Checkbox} from 'semantic-ui-react';
import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Create(){
    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [Checked,setChecked]=useState(true);
    const navigate = useNavigate();
    const postdata = async() => {
          await axios.post(API_URL,{
            FirstName,
            LastName,
            Checked
          })
          navigate('/Read')
    }

    return (<>
    <Form className="form">
        <Form.Field>
            <label>First Name: </label>
            <input placeholder="Enter first name" value={FirstName}
            onChange={event => setFirstName(event.target.value)}/>
        </Form.Field><br></br>
        <Form.Field>
            <label>Last Name: </label>
            <input placeholder='Enter last name' value={LastName}
            onChange={event => setLastName(event.target.value)}/>
        </Form.Field><br></br>
        <Form.Field>
            <Checkbox label="Agree to terms and conditions" checked={Checked}
            onChange={() => setChecked(!Checked)}/>
        </Form.Field><br></br>
        <button onClick={postdata}>Submit</button>
    </Form>    
    </>);
  }
  export default Create
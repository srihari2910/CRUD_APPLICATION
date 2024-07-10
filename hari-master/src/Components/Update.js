import React,{useEffect,useState} from 'react'
import {Form,Buton,Checkbox} from 'semantic-ui-react'
import {API_URL} from '../Url/Url';
import axios from 'axios';
import {useNavigate} from 'react-router-dom' 
function Update(){
    const [id,setid]=useState('');
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [Checked,setChecked]=useState(false);
    const navigate=useNavigate();
    const updateuser= async() => {
          await axios.put(API_URL + id, {
            FirstName,
            LastName,
            Checked
          })
          navigate('/Read')
    }
    useEffect( () => {
      setFirstName(localStorage.getItem('FirstName'))
      setid(localStorage.getItem('id'))
      setLastName(localStorage.getItem('LastName'))
      setChecked(localStorage.getItem('Checked'))
    },[])
    return (<>
         <Form className="form">
             <Form.Field>
              <label>FirstName: </label>
              <input value={FirstName} placeholder="Enter first name" onChange={event => setFirstName(event.target.value)}/><br></br><br></br>
              </Form.Field>
              <Form.Field>
            <label>Last Name: </label>
            <input placeholder='Enter last name' value={LastName}
            onChange={event => setLastName(event.target.value)}/>
        </Form.Field><br></br>
        <Form.Field>
            <Checkbox label="Agree to terms and conditions" checked={Checked}
            onChange={() => setChecked(!Checked)}/>
        </Form.Field><br></br>
        <button onClick={updateuser}>Update</button>



         </Form>
    
    </>);
  }
  export default Update
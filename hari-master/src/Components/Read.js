import {Table,Button} from 'semantic-ui-react';
import {useState,useEffect} from 'react'
import {API_URL} from '../Url/Url';
import axios from 'axios'
import '../App.css'
import {useNavigate} from 'react-router-dom' 

function Read(){
    const [apidata, setapidata]=useState([]);
    const navigate=useNavigate();
    const deleteuser= async (id) => {
          await axios.delete(API_URL + id)
          callGetApi()
    }
    const updateuser= ({id,FirstName,LastName,Checked}) =>{
           localStorage.setItem('id',id)
           localStorage.setItem('FirstName',FirstName)
           localStorage.setItem('LastName',LastName)
           localStorage.setItem('Checked',Checked)
           navigate('/Update')
    }
    

    const callGetApi = async () => {
           const resp=await axios.get(API_URL);
           setapidata(resp.data);
    }
    useEffect( () => {
          callGetApi();
    },[]);

    return (<>
          <Table singleLine classname="readTable">
              <Table.Header>
                   <Table.Row>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>Lastname</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                   </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                    apidata.map(data => (
                        <Table.Row key={data.id}>
                      
                      <Table.Cell>{data.FirstName}</Table.Cell>
                      <Table.Cell>{data.LastName}</Table.Cell>
                      <Table.Cell>{data.Checked ? 'true' : 'false'}</Table.Cell>
                      <Table.Cell><Button onClick={() => deleteuser(data.id)}>DELETE</Button></Table.Cell>
                      <Table.Cell><Button onClick={() => updateuser(data)}>UPDATE</Button></Table.Cell> 
                        
                        </Table.Row>
                        
                        ))

                }
                  
              </Table.Body>
          </Table>
    
    
    </>);
  }
  export default Read
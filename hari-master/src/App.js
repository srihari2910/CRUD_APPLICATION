import Create from './Components/Creat';
import Read from './Components/Read';
import Update from './Components/Update';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

function App(){
  return (<div className="main">
  
    <h2>CRUD OPERATION</h2>
    <BrowserRouter>
       <Routes>
           <Route exact path='/Create' element={<Create/>}></Route>
           <Route exact path='/Read' element={<Read/>}></Route>
           <Route exact path='/Update' element={<Update/>}></Route>
       </Routes>    
    </BrowserRouter>   
  </div>
  );
}
export default App
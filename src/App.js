import './App.css';
import { Button, Card, Form, formData } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Fileupload/>
    </div>
  );
}

export default App;


function Fileupload(){

  const [name, setName] = useState("");
  const [singleFile, setSingleFile] = useState('');

  const uploadFile = async() => {

    

    const formData = new FormData();
    formData.append('file', singleFile);
    await singleFileUpload(formData);

     //console.log(singleFile);

  }
    // getting api endpoint
    const apiUrl = 'http://localhost:9000/api/';

    const singleFileUpload = async (data) => {
      try{
        await axios.post( apiUrl + 'singleFile', data);
      } catch (error){
        throw error;
      }
    }



  // const upload = (event) => {
  //   const data = new FormData();

  //   data.append('name', name);
  //   data.append('file', file);

  //   fetch.post('https://httpbin.org/anything', data)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));

  // };
  
  return(

    <div className='card'>
      <Card bg='info'>
          <Card.Body>
            <Form>
               <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label className='formLabel'>Student Task Submission Portal</Form.Label>
                  <Form.Control  type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                  <Form.Control type="file" onChange={(e) => setSingleFile(e.target.files[0])} size="lg" />
                </Form.Group>
            </Form>

          </Card.Body>
      </Card>

        <Button className='btn'  onClick={() => uploadFile()}  variant="primary" size="lg" active>
          Click here to Upload
        </Button>{' '}

    </div>   
    

  )
}
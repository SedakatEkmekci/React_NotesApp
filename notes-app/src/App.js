
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <button className='btn btn-danger'>Gönder</button>
            <Alert variant={'danger'}>
              This is a alert—check it out!
            </Alert>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Employee from './components/Employee';
// import Hamza from './Hamza';
// import Uni from './University';
// import Emp from './components/Emp';


function App() {
  const showEmployees = true;
  return (       
    <>
      return (
        <div className='App'>
          {
          showEmployees ? 
          <>
          <Employee/>          
          <Employee/>
          <Employee/>
          <Employee/>
          <Employee/>
          </> 
          : 
          <p>you can't see the employees</p>
          }
        </div>
      )
    
    
    
    
    
    </>   



       
       
       




       
        
        /* 
            <>
      <div className="App">        
        <Hamza/>
        <Emp/>
        {/* <header className="App-header">
          <p> Hellosafd!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>Ali Azfar
          <Uni/>
        </div>
      </div>
    </> */
    
  );
}

export default App;
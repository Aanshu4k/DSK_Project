import React from 'react';
import Logo from './Components/Logo';
import Header from './Components/Header';
import './App.css';
import Address from './Components/Address';
import Row1 from './Components/Row1';
import Row2 from './Components/Row2';
import User_Details from './Components/User_Details';
import ConnectionDetails from './Components/ConnectionDetails';
function App() {
  return (
    <div className="App" style={{ margin: '20px 10px', alignContent: 'center' }}>
      <div style={{ display: 'flex', padding: '10px', alignItems: 'center' }}><Logo /><div><Header /></div></div>
      <div className='row' style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'left' }}>
        <Row1 />
      </div>
      <div className="first-section" style={{ display: 'flex', alignItems: 'flex-start' }}>
      </div><br />
      <Row2 />
      
      {/* <div>
        <Sample_Login />
        <Sample_Login_Table />
      </div><br />
      <div>
        <ProductList /> 
      </div><br /> */}

    </div >
  );
}
export default App;

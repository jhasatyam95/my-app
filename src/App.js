import Navbar from './components/Navbar.js';
import './App.css';
import Forms from './components/Forms.js';
import React,{ useState } from 'react';
import Alert from './components/Alert.js';
// import Accordion from './components/Accordion.js';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [darkMode,changeDarkMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const displayAlert = (alertmsg,alerttype) =>{
    setAlert({
      msg:alertmsg,
      type:alerttype
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // setInterval(() => {
  //   document.title = 'buy Now';
  // }, 2000);

  // setInterval(() => {
  //   document.title = 'sell Now';
  // }, 1500);

  const changeTheme = () =>{
    if(darkMode === 'light'){
      changeDarkMode('dark');
      document.body.style.backgroundColor = '#211f1f';
      document.body.style.color = '#b5aeae';
      displayAlert('Dark mode is ON','success');
      
    }
    else{
      changeDarkMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      displayAlert('Light mode is ON','success');
    }
  }


  return (
    <>
    {/* <Router> */}
      <Navbar title="satya" about="About" mode={darkMode} changeTheme={changeTheme}/>
      <Alert alertTitle={alert}/>

        {/* <Routes> */}

          {/* <Route exact path='/about' element={<Accordion/>}> */}
            
          <Forms name = "ENTER TEXT FOR FOLLOWING OPERATIONS" mode={darkMode} displayAlert={displayAlert}/>
     
    </>
  );
}

export default App;

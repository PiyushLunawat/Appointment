import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import Image from './components/Image';
import Login from './components/Login';
import Navbarhome from './components/Navbarhome';
import Calendar from './components/Calendar';
import Appointment from './components/Appointment';
function App() {
  return (
    <div>
      
      <BrowserRouter>      
      <Routes>
        <Route path="/" element={
          <>
        <Navbar/>
        <div className="side">
        <Login />
        <Image/>
        </div>
        </>
        }/>
          <Route path="/signup" element={
            <>
            <Navbar/>
            <div className="side">
            <SignupForm />
            <Image/>
            </div>
            </>
          } />
          <Route path='/home' element={
            <>
            <Navbarhome/>
            <Calendar/>
            </>
          }
          
          /> 
          <Route path='/appoint' element={
            <>
            <Navbarhome/>
            <Appointment/>
            </>
          }
          
          />         
        
      </Routes>
      </BrowserRouter>
    
 
      
    </div>
  );
}

export default App;

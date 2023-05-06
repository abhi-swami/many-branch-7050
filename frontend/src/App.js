
import './App.css';
import { Navbar } from './Components/Navbar';
// import { Navbar } from './Components/NavbarMenu/Navbar';
// import Navbar from "./Components/NavbarMenu/navbar";
import AllPages from './Router/AllPages';

function App() {
  return (
    <div >
      {/* <Signup/> */}
      {/* <Login/> */}
      <Navbar/>
      <AllPages/>
    </div>
  );
}

export default App;

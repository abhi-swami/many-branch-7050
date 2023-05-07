
import './App.css';
import { Navbar } from './Components/Navbar';

import AllPages from './Router/AllPages';

import Signup from './Pages/Auth/Signup';
import {Footer} from "../src/Components/Footer/Footer"


function App() {
  return (
    <div >
      {/* <Signup/> */}
      {/* <Login/> */}
      <Navbar/>
      <AllPages/>
      <Footer />
    </div>
  );
}

export default App;

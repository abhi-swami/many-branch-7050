import Login from './Pages/Auth/Login';
import './App.css';

import AllPages from './Router/AllPages';
import Signup from './Pages/Auth/Signup';
import {Footer} from "../src/Components/Footer/Footer"

function App() {
  return (
    <div >
      {/* <Signup/> */}
      {/* <Login/> */}
      <AllPages/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

import './App.css';
import Login from './Auth/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Auth/Signup';
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

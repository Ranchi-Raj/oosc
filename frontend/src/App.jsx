import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/homePage'
import Profile from './components/profile'
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path ='/details' element={<Details/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

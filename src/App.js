
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Nvbr from './components/Nvbr';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <Nvbr />
     <Routes>
       <Route path='/' element ={<Navigation />}/>
       <Route path='/userlist' element={<UserList />}/>
     </Routes>
    </div>
  );
}

export default App;

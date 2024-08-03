import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Rocket } from './pages/Rocket';


function App() {
  return (
   <>
     <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/rockets' element={<Rocket/>}/>
      </Routes>
     </Router>
   </>
  );
}

export default App;

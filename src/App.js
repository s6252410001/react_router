
import { Link , Routes ,Route} from 'react-router-dom';
import './App.css';
import Circle from './views/Circle';
import Home from './views/Home';
import Square from './views/Square';
import Triagle from './views/Triagle';


function App() {
  return (
    <div style={{textAlign:'center'}}>
    <h1>Southeast Asia University</h1>
    <div style={{textAlign:'center'}}></div>
    <Link to='/'  style={{padding:10}}>Home</Link>
    <Link to='/circle'   style={{padding:10}}>Circle Area</Link>
    <Link to='/square'  style={{padding:10}}>Square Area</Link>
    <Link to='/triagle'  style={{padding:10}}>Triagle Area</Link>
    <hr/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/circle' element={<Circle />} />
      <Route path='/square' element={<Square />} />
      <Route path='/triagle' element={<Triagle />} />
    </Routes>
    </div>
  );
}

export default App;

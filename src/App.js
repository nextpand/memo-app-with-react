import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { Page1 } from './pages/Page1';
import { Home } from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Page1' element={<Page1/>}></Route>
          <Route path='/Page2' element={<Page2/>}></Route>
          <Route path='/Page3' element={<Page3/>}></Route>
          <Route path='/Page4' element={<Page4/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

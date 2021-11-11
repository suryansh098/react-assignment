import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Page1 />}></Route>
          <Route path='/friends' exact element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

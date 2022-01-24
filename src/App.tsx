import Main from './pages/main';
import History from './pages/history'
import Settings from './pages/settings';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Pure routing

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/history" element={<History />}/>
          <Route path="/" element={<Main />}/>
        </Routes>
    </Router>
    </div>
    
    
  );
}

export default App;

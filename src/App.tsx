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
    <Router>
        <Routes>
          <Route path="/settings" element={<Settings/>}>
   
          </Route>
          <Route path="/history" element={<History />}>
        
          </Route>
          <Route path="/" element={<Main />}>
      
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NFTList from './nftList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import nftCard from './NFTcard.tsx';
function App() {
  return (<Router>
    {/* <div className="App">
      <header className="App-header">
        This is the header
        
        
      </header>
    </div> */}
      
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/nftlist" element = {<NFTList />} />
      </Routes>
    </Router>
  );
}

export default App;

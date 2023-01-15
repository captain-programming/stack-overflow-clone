import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRouters from './pages/AllRouters';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='all-routes'>
      <AllRouters />
      </div>
    </div>
  );
}

export default App;

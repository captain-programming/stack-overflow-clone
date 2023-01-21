import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRouters from './pages/AllRouters';
// import { useEffect } from 'react';
// import { getQuestion } from './stores/questions/question.action';
// import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getQuestion());
  // }, [dispatch])
  
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

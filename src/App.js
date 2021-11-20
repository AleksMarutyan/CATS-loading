import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './assets/styles/app.scss';
import SideMenu from './components/SideMenu/SideMenu';
import Main from './components/Main/Main';
import { getCategories } from './redux/thunks/catsThunk'


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories())
  })
  return (
    <div className='app'>
      <SideMenu/>
      <Main/>
    </div>
  );
}

export default App;

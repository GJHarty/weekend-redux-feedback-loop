import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';

function App() {
  // just setting these up here to make sure the store instance
  // is initialized okay
  // logs should show default empty arrays at this point
  const responseReducer = useSelector(store => store.responseReducer);
  const resultReducer = useSelector(store => store.resultReducer);
  console.log(responseReducer);
  console.log(resultReducer);

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;

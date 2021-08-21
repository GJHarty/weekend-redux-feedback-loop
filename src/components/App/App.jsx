import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector } from 'react-redux';

// import components:
import Header from '../Header/Header';
import FeelingResponse from '../FeelingResponse/FeelingResponse';
import CommentResponse from '../CommentResponse/CommentResponse';
import SupportedResponse from '../SupportedResponse/SupportedResponse';
import UnderstandingResponse from '../UnderstandingResponse/UnderstandingResponse';
import Review from '../Review/Review';

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
      {/* 
        testing components 
      */}
      <Header />
      <FeelingResponse />
      <UnderstandingResponse />
      <SupportedResponse />
      <CommentResponse />
      <Review />
    </div>
  );
}

export default App;

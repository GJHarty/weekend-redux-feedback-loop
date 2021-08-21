import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector } from 'react-redux';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

// import components:
import Header from '../Header/Header';
import FeelingResponse from '../FeelingResponse/FeelingResponse';
import CommentResponse from '../CommentResponse/CommentResponse';
import SupportedResponse from '../SupportedResponse/SupportedResponse';
import UnderstandingResponse from '../UnderstandingResponse/UnderstandingResponse';
import Review from '../Review/Review';
import FinalPage from '../FinalPage/FinalPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Route exact path='/'>
          <FeelingResponse />
        </Route>

        <Route exact path='/understanding'>
          <UnderstandingResponse />
        </Route>

        <Route exact path='/supported'>
          <SupportedResponse />
        </Route>

        <Route exact path='/comment'>
          <CommentResponse /> 
        </Route>

        <Route exact path='/review'>
          <Review />
        </Route>

        <Route exact path='/final'>
          <FinalPage />
        </Route>
      </Router>      
    </div>
  );
}

export default App;

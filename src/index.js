import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import ReviewsList from './components/ReviewsList/ReviewsList';
import reportWebVitals from './reportWebVitals';
import reviews from './data/reviews/reviews';

ReactDOM.render(
  <ReviewsList reviews={reviews}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

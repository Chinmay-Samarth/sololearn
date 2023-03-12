import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const name = "Chinmay"
const el = <p>Hello, {name}</p>

let counter = 0;

function show(){
  counter++;
  const el = <p>{counter}</p>;
  root.render(
    el, document.getElementById('root')
  );
}

//? setInterval(show,1000);

function Hello(){
  return <h1>Hello world.</h1>;
}

const line = <Hello />;

root.render(
  line,
  document.getElementById('root')
);

class classComponent extends React.Component {
  render(){
    return <h1>Hello world.</h1>
  }
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

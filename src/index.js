import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// const name = "Chinmay"
// const el = <p>Hello, {name}</p>

// let counter = 0;

// function show(){
//   counter++;
//   const el = <p>{counter}</p>;
//   root.render(
//     el, document.getElementById('root')
//   );
// }

//? setInterval(show,1000);

// function Hello(props){
//   return <h1>Hello {props.name}</h1>;
// }

// const line = <Hello name="Chinmay"/>;

// root.render(
//   line,
//   document.getElementById('root')
// );

class Hello extends React.Component {
  state = {
    name:"James"
  }
  render(){
    return <h1>Hello {this.state.name} {this.setState.age}</h1>
  }
}

function App1(){
  return <div>
    <Item name="Cheese" price="4.99"/>
    <Item name="Bread" price="1.5"/>
    <Item name="Ice cream" price="24"/>
    
  </div>;
}

function Item(props){
  return <div className='item'>
    <b>Name:</b> {props.name} <br/>
    <b>Price:</b> {props.price}
  </div>;
}

class Counter extends React.Component {
  state = {
    counter : 0
  }

  increment = () =>{
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render(){
    return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

function Hook(){
  const [name, setName] = useState("David");

  return <h1>Hello {name}</h1>
}

function CounterHook() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);
  }
  return <div>
    <p>{counter}</p>
    <button onClick={increment}>
      Increment
    </button>
  </div>;
}

const el = <CounterHook/>;
root.render(
  el,
  document.getElementById('root')
)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

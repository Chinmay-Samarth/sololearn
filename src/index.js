import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import app from './ContactManager'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);


// let counter = 0;

// function show(){
//   counter++;
//   const el = <p>{counter}</p>;
//   root.render(
//     el, document.getElementById('root')
//   );
// }

// //? setInterval(show,1000);

// function Hello1(props){
//   return <h1>Hello {props.name}</h1>;
// }

// const line = <Hello name="Chinmay"/>;

// root.render(
//   line,
//   document.getElementById('root')
// );

// class Hello extends React.Component {
//   state = {
//     name:"James"
//   }
//   render(){
//     return <h1>Hello {this.state.name} {this.setState.age}</h1>
//   }
// }

// function App1(){
//   return <div>
//     <Item name="Cheese" price="4.99"/>
//     <Item name="Bread" price="1.5"/>
//     <Item name="Ice cream" price="24"/>
    
//   </div>;
// }

// function Item(props){
//   return <div className='item'>
//     <b>Name:</b> {props.name} <br/>
//     <b>Price:</b> {props.price}
//   </div>;
// }

// class Counter extends React.Component {
//   state = {
//     counter : 0
//   }

//   increment = () =>{
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }

//   componentDidMount(){
//     this.setState({counter:0});
//   }  

//   componentDidUpdate() {
//     alert("Number of clicks: " + this.state.counter);
//   }

//   render(){
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.increment}>Increment</button>
//     </div>;
//   }
// }

// function Hook(){
//   const [name, setName] = useState("David");

//   return <h1>Hello {name}</h1>
// }

// function CounterHook() {
//   const [counter, setCounter] = useState(0);

//   useEffect(()=>{
//     alert("number of clicks: "+counter);
//   },[counter]);

//   function increment(){
//     setCounter(counter+1);
//   }

//   return <div>
//     <p>{counter}</p>
//     <button onClick={increment}>
//       Increment
//     </button>
//   </div>;
// }

// function Converter() {
//   const [km, setKm] = useState(0);

//   function handleChange(e){
//     setKm(e.target.value);
//   }
//   function convert(km){
//     return (km/1.609).toFixed(2);
//   }
  
//   return <div>
//     <input type="text" value={km} onChange={handleChange}/>
//     <p>{km} km is {convert(km)} miles</p>
//   </div>;
// }

// function AddForm() {
//   const [sum,setSum] = useState(0);
//   const [num,setNum] = useState(0);

//   function handleChange(e){
//     setNum(e.target.value);
//   }

//   function handleSubmit(e){
//     setSum(sum+ Number(num));
//     e.preventDefault();
//   }

//   return <form onSubmit={handleSubmit}>
//     <input type="number" value={num} onChange={handleChange}/>
//     <input type="submit" value="Add"/>
//     <p>Sum is {sum}</p>
//   </form>;
// }

// //!Rendering a list

// const arr = ["A", "B", "C"];

// function MyList(props){
//   const arr = props.data;
//   const listItems = arr.map((val, index)=>
//     <li key={index}>{val}</li>);
//   return <ul>{listItems}</ul>;
// }


// //!Contact form

// function AddPersonForm(props){
//   const [person, setPerson] = useState("");
  
//   function handleChange(e){
//     setPerson(e.target.value);
//   }

//   function handleSubmit(e){
//     props.handleSubmit(person)
//     setPerson('');
//     e.preventDefault();
//   }

//   return <form onSubmit={handleSubmit}>
//     <input type="text" placeholder='Add new contact' onChange={handleChange} value={person}></input>
//     <button type="submit">Add</button>
//     </form>
// }

// function PeopleList(props){
//   const arr = props.data;
//   const listItems = arr.map((val,index)=>
//   <li key={index}>{val}</li>);
//   return <ul>{listItems}</ul>
// }

// function ContactManager(props){
//   const [contacts, setContact] = useState(props.data);

//   function addPerson(name){
//     setContact([...contacts,name]);
//   }

//   return (
//     <div>
//       <AddPersonForm handleSubmit={addPerson}/>
//       <PeopleList data={contacts}/>
//     </div>
//   );
// }

 // const contacts = ["James Smith","Thomas Anderson","Bruce Wayne"];

  //!Counter using redux

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }

// const mapDispatchToProps = {
//   incrementCounter
// }

// function incrementCounter(num){
//   return {
//     type:'INCREMENT',
//     num : num
//   }
// }

// const initialState = {
//   count : 0
// };

// function reducer(state = initialState, action){
//   switch(action.type){
//     case 'INCREMENT':
//       return {count:state.count + action.num};
//     default:
//       return state;
//     }
//   }
  
//   const CounterCon = connect(mapStateToProps, mapDispatchToProps)(CounterRedux);



// function CounterRedux(props){
//   function handleClick(){
//     props.incrementCounter(2);
//   }
//   return <div>
//     <p>{props.count}</p>
//     <button onClick={handleClick}>Increment</button>
//   </div>
// }

// const store = createStore(reducer);

// const el = (
//   <Provider store={store}>
//     <CounterCon/>
//   </Provider>
// )




root.render(app)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

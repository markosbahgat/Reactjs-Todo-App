import React, { useReducer, useState } from 'react'
import './taskstyles.css';

import background from './Images/5282d04a5446e70d3851fca036b7a0f9.jpg'
import logo from './Images/unnamed.png';
import {
  Link
} from "react-router-dom";


export default function Tasks() {



const ACTIONS = {
  ADD_TODO : 'add_todo',
  TOGGLE_TODO : 'toggle_todo',
  DELETE_TODO : 'delete_todo'
}

function reducer(state, action){
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, addedTodo(action.payload.newtodo)]
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete};
         
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}


function addedTodo(newtodo) {
  return {id : Date.now(), name:newtodo , complete : false , dateandtime:datemine.toLocaleDateString( "en-US" ,{ weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}
}

const datemine = new Date();
 /*setTimeout(function(){
      document.querySelector('input[type="checkbox"]').setAttribute('checked',true);
      },100);
  */
  
  const [state, dispatch] = useReducer(reducer, []);
  const [newtodo , setNewTodo] = useState('');
  
  function handleAddTodo(e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {newtodo:newtodo}})
    setNewTodo('')
  }
  function handleToggleTodo(todo) {
    dispatch({payload:{id: todo.id}, type:ACTIONS.TOGGLE_TODO})
  }
  
    
  function handleShowInput(e) {
    e.target.parentElement.classList.remove("form-input");
  }
  
      return (
        <div>

            <div className="mynavbar">
          <img src={logo} style={{width:"10%"}} alt="#"/>
          <Link to="/Register"><i className="far fa-user-circle" style={{fontSize:"45px"}}></i></Link>
        </div>
        <div className="tasks-container">
          
  <svg viewBox="0 0 0 0" style={{ position: "absolute", zIndex: -1, opacity: 0 }}>
    <defs>
      <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
        <stop offset="0%" stopColor="#27FDC7" />
        <stop offset="100%" stopColor="#0FC0F5" />
      </linearGradient>
      <linearGradient id="lineGradient">
        <stop offset="0%" stopColor="#0FC0F5" />
        <stop offset="100%" stopColor="#27FDC7" />
      </linearGradient>
      <path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h168v0.1z" />
      <path id="todo__box" stroke="url(#boxGradient)" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"/>
      <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5" />
      <circle id="todo__circle" cx="13.5" cy="12.5" r="10" />
    </defs>
  </svg>
  <div className="todo-list overflow-hidden">
<form onSubmit={handleAddTodo} className="form-input">
          <input value={newtodo} placeholder='Add New Todo , Then Press "Enter" To Save It.....' type="text" onChange={e => setNewTodo(e.target.value)}/>
            <button className="add-button" onClick={e => handleShowInput(e)}><i className="fas fa-plus"></i></button>
          </form>
    <span>{datemine.toLocaleDateString( "en-US" ,{ weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}</span>
    <hr style={{height:"2px"}}/>
    <label className="todo">
      <input className="todo__state" type="checkbox" onClick={e => handleToggleTodo(e)}/>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon">
        <use xlinkHref="#todo__line" className="todo__line" />
        <use xlinkHref="#todo__box" className="todo__box" />
        <use xlinkHref="#todo__check" className="todo__check" />
        <use xlinkHref="#todo__circle" className="todo__circle" />
      </svg>
      <div className="todo__text" onClick={e => handleToggleTodo(e)}>Do a very important task</div>
    </label>
    {state.map(todo => {
      return <label className="todo">
          <input className="todo__state" type="checkbox" onClick={todo => handleToggleTodo(todo)}/>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon">
            <use xlinkHref="#todo__line" className="todo__line" />
            <use xlinkHref="#todo__box" className="todo__box" />
            <use xlinkHref="#todo__check" className="todo__check" />
            <use xlinkHref="#todo__circle" className="todo__circle" />
          </svg>
          <div className="todo__text" style={{color:todo.complete ? '#000' : '#fff'}}>{todo.name}<i className="far fa-edit"></i>
          <i onClick={() => dispatch({payload:{id: todo.id}, type:ACTIONS.DELETE_TODO})} className="far fa-trash-alt" style={{zIndex:"10000", position:"relative"}}></i>
          </div>
        </label>
    })}
  </div>

        </div>
            <div className="bg-container" ><img src={background} alt="#"/></div>
        </div>
    )
}

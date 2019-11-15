import React, { useReducer, useState } from 'react'


function reducer(state, action) {

  switch (action.type) {
    case 'add-todo':
      return { 
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount : state.todoCount +1
    }

    case 'toggle-todo':
      return {
        todos : state.todos.map((x, id) => id === action.id ? {...x, completed : !x.completed} : x ),
        todoCount : state.todoCount
      }
    
      default:
      return state;
  }




}

const AppReducer = () => {

  const [{ todos, todoCount  }, dispatch] = useReducer(reducer, { todos: [], todoCount : 0 })
  const [text, setText] = useState()

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({ type: 'add-todo', text })
        setText("")
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>
          number of todo : {todoCount}
      </div>

      {todos.map((x, id) => {
        return <div style={{
          textDecoration: x.completed ? 'line-through' : ''
        }} key={x.text} onClick={() => dispatch({ type: 'toggle-todo', id})} >{x.text}</div>
      })}
    

      

    </>
  )

}

export default AppReducer
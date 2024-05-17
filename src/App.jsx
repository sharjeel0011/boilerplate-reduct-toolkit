import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './Config/Reduct-config/reducer/todoSlice';



// todo slice ready kerna he or store ki file 
// then main.jsx me provider attch ker na he
//or phir app pe work ker na he 
const App = () => {
  const todo = useRef();

  const selector = useSelector(state => state.todos)

  const dispatch = useDispatch();

  const addTodoToStore = () => {
    console.log(todo.current.value);
    dispatch(addTodo({
      title: todo.current.value
    }))
    console.log(selector);
    todo.current.value = ''
  }


  const deleteTodo = (index)=>{
    dispatch(removeTodo({
      index
    }))

  }
  return (
    <>
      <input type="text" placeholder='todo' ref={todo} />
      <button onClick={addTodoToStore}>submit</button>

      {
        selector.map((item , index) => {
          return <li key={item.id}>
            {item.title}
            <button onClick={() => deleteTodo(index)}>delete</button>
          </li>
        })
      }
    </>
  )
}

export default App
import React from 'react'
import TodoItem from './TodoItem'
    
const Todo = () => {
    const [value,setValue]=React.useState("");
    const [todos,setTodos]=React.useState([]);
    const [comp,setComp]=React.useState([]);
    const [show,setShow]=React.useState(true);
    const handleChange=(value)=>
    {
      setTodos(todos.filter((el)=>el.value!==value.value));
      setComp([...comp,{id:Date.now(),value:value}]);
    }
  return (
    <>
    <div>
    <div className='bar'>
        <input  placeholder='Add Todos' className='inputtag' type="text" value={value} onChange={(e)=>
        {
            setValue(e.target.value)
        }} />
        <button onClick={()=>
        {
            setTodos([...todos,{id:Date.now(),value:value}]);
            setValue("");
        }}><i className="fa-solid fa-plus"></i></button>
    </div>
    </div>
    <h3 className='text'>Todo's</h3>
    <div className='added'>
    {
      todos.map((todo)=>
      (
          <TodoItem key={todo.id} value={todo.value} handleChange={handleChange}/>
      ))
    }
     <div>
      <button className='showcomp' onClick={()=>
    {
      setShow(!show);
    }}>{show? "Show Completed":"Hide Completed"}</button></div></div>
    <div>
      {
        comp.map((comp)=>
        (
            (show? null:<TodoItem key={comp.id} value={comp.value.value}l/>)
        ))
        
      }
      </div>
    </>
  )
}

export default Todo
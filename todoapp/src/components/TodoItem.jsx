import React from 'react'


const TodoItem = ({value,handleChange}) => {
    const [over,setOver]=React.useState(false);
  return (
      <>
      
      <div className='todos' style={over? {backgroundColor:'green'}:{}} >
      <div className='value' >
          <div>
                <input className='checkbox' type="checkbox" name='check' onClick={()=>
                {
                    if(over===false)
                    {
                        setOver(true);
                    
                    }
                    else
                    {
                        setOver(false);
                    }
                }
                }/>
         </div>
         <div style={over? {textDecoration:'line-through', backgroundColor:'green'}:{textDecoration:'none'}}>{value}</div>
      </div>
     <div>
        <button onClick={()=>
            (
            handleChange({value})
            )}><i className="fa-solid fa-trash"></i></button>
      </div>
        
    </div>
     
      </>
    
     
  )
}


export default TodoItem
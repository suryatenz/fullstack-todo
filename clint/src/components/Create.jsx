import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {

    const [task,setTask] = useState()

    const handleadd = ()=>{
        axios.post('http://localhost:3001/add',{task:task})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <>
    <div className="">
        <h2>Create todo</h2>
        <input type="text" name="" id="" onChange={(e)=>setTask(e.target.value)} />
        <button className=' ml-1'
        onClick={handleadd}
        >Submit</button>
    </div>
    </>
  )
}

export default Create

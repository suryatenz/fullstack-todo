import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import Images from './Images'
import { useDispatch, useSelector } from 'react-redux'
import { loginChange} from '../features/todo/loginSlice'

const Home = () => {

    const [todos,setTodo] = useState([])
    const dispach = useDispatch()
    const log = useSelector((state)=>state.login)
    // const [img,setImg] = useState([])

    const handleLogout=()=>{
      dispach(loginChange(log))
    }

    useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(res=>setTodo(res.data))
      .catch(err=>console.log(err))
    },[todos])
    
    // useEffect(()=>{
    //   axios.get('http://localhost:3001/gets')
    //   .then(res=>setImg(res.data))
    //   .catch(err=>console.log(err))
    // },[img])

    const handleDelete = (id)=>{
      axios.delete(`http://localhost:3001/delete/${id}`)
      .then(res=>{
        location.reload()
      })
      .catch(err=>console.log(err))
    }

    const handleEdit = (id) =>{
      let userInput = prompt("Please enter some data:");
      if (userInput !== null) { 
        axios.put(`http://localhost:3001/put/${id}`, { userInput })
          .then(res => {
            setTodo(res.data)
          })
          .catch(err => {
            console.log(err);
          });
      }
    }

  return (
    <>
    <div className="flex flex-col gap-2">
      <div className="">
        <button onClick={handleLogout}>LogOut</button>
      </div>
        <div className="">
            <Create/>
        </div>
        <div className=''>
        {
            todos.length===0?
            <p key='empty'>Enter todo</p>:
            todos.map((todo)=>(
              <div key={todo._id} className=" flex flex-row justify-center mt-5 gap-5 mb-3">
                <button className='bg-white mr-2 px-2 py-1 mt-2 mb-2 text-black' onClick={()=>handleEdit(todo._id)}>Edit</button>
                <p className=' mb-2 px-2 py-2 mt-2'>{todo.task}</p>
                <button className=' bg-white mr-2 px-2 py-1 mt-2 mb-2 text-black' onClick={()=>handleDelete(todo._id)}>Delete</button>
                </div>
            )) 
        }
        </div>
        <div className="">
          <Images/>
        </div>
    </div>
    </>
  )
}

export default Home

import React, { useState } from 'react'
import auth from '../configs/firebaseConfig.js'
import { GoogleAuthProvider , signInWithPopup } from 'firebase/auth';
import { useDispatch , useSelector } from 'react-redux';
import { loginChange } from '../features/todo/loginSlice.js';



const Login = () => {
  
  const dispach = useDispatch()
  const log = useSelector((state)=>state.login)

  const [users,setUser] = useState()

  const loginWithGoogle = () =>{
    const provider = new GoogleAuthProvider([]);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser([user]);
        console.log('User logged in:', user);
        if(user.emailVerified){
          dispach(loginChange(log))
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  }

  // if (log) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
    <div className="my-3">
        <button onClick={loginWithGoogle}>
            Login with Google
        </button>
    </div> 
    </>
  )
}

export default Login

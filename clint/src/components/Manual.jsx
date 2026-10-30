import React from 'react'

const Manual = () => {
    
  const handleSubmit = (e) =>{
    console.log("done")
    e.preventDefault()
  }


  return (
    <>
    <div className="flex flex-col border bg-sky-800 px-3 py-3">
      <div><h2 className=' pb-2'>Registration form</h2></div>
    <form>
      <div className="flex flex-row gap-1 pb-3">
      <label>Name:</label>
      <input type="text" placeholder='Enter Name' required id="2" />
      </div>
      <div className='flex flex-row gap-1 pb-3'>
      <label htmlFor="email">Email:</label>
      <input type="email" placeholder='Enetr Mail' required id="3"/>
      </div>
      <div className="flex flex-row gap-1 pb-3">
      <label>Password:</label>
      <input type="password" placeholder='Enter password' required id="6" />
      </div>
      <div className="flex flex-row gap-2 justify-center">
      <button type='submit' onClick={handleSubmit} className=' border border-red-400' >Signin</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default Manual

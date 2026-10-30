// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// const Images = () => {

//   const [file,setFile] = useState()
//   const [image,setImage] = useState()

//   const handleupdate=(e)=>{
//     const formdata = new FormData()
//     formdata.append('file',file)
//     axios.post('http://localhost:3001/upload',formdata)
//     .then(res=>console.log(image))
//     .catch(err=>console.log(err))
//   }

//   useEffect(()=>{
//     axios.get('http://localhost:3001/getImage')
//     .then(res=>setImage(res.data))
//     .catch(err=>console.log(err))
//   },[image])

//   return (
//     <>
//     <div className="">
//         <input type="file" onChange={e=>setFile(e.target.files[0])} />
//         <button onClick={handleupdate}  >Upload</button>
//     </div>
//      <div className="hi flex ml-10">
//      {
//       image.map((imm)=>(
//         <img src={`http://localhost:3001/Images/${imm.image}`} className='border border-red-500 ml-56' width={'50%'} height={'50%'} alt=""/>
//       ))
//     }
//     </div>  
//     {/* <img src={`http://localhost:3001/Images/${image.image}`} className='border border-red-500 ml-56' width={'50%'} height={'50%'} alt=""/> */}
//     </>
//   )
// }

// export default Images

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Images = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleUpdate = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:3001/upload', formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:3001/getImage')
      .then(res => setImage(res.data))
      .catch(err => console.log(err));
  }, [image]); // Empty dependency array to fetch image data only once when the component mounts

  return (
    <>
      <div className="">
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button onClick={handleUpdate}>Upload</button>
      </div>
      <div className="flex justify-center items-center flex-col gap-5 mt-6">
        {image && image.map((imm, index) => (
          <img key={index} src={`http://localhost:3001/Images/${imm.image}`} className='border border-red-200 border-r-2' width={'45%'} height={'45%'} alt="" />
        ))}
      </div>
    </>
  );
};

export default Images;

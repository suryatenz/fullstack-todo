import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import TodoModel from './models/todo.js'
import path from 'path'
import multer from 'multer' 
import TodosModels from './models/images.js'                                                                                                                                                                                                                                                                

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb://127.0.0.1:27017/test')
const db = mongoose.connection
db.once('open',()=>{
  console.log('db connected')
})

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'public/Images')
  },
  filename:(re,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
  }
})

const upload = multer({
  storage:storage
})

app.post('/upload',upload.single('file'),(req,res)=>{
  TodosModels.create({image:req.file.filename})
  .then(resu=>res.json(resu))
  .catch(err=>res.json(err))
})

app.get('/getImage',(req,res)=>{
  TodosModels.find()
  .then(resu=>res.json(resu))
  .catch(err=>res.json(err))
})

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete(id)
    .then(result=>{
        location.reload()
    })
    .catch(err=>res.json(err))
})

// app.delete('/delete/:id', (req, res) => {
//     const { id } = req.params;
//     TodoModel.findByIdAndDelete(id)
//         .then(result => {
//             res.status(200).json({ message: 'Todo deleted successfully' });
//         })
//         .catch(err => {
//             res.status(500).json({ error: 'An error occurred while deleting the todo' });
//         });
// });

// app.put('/put/:id',(req,res)=>{
//     const { id } = req.params;
//     const updatedData = req.body;
//     TodoModel.findByIdAndDelete(id,updatedData,{new:true})
//     .then(result=>res.json(result))
//     .catch(err=>res.json(err))
// })

app.put('/put/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body.userInput;
    TodoModel.findByIdAndUpdate(id, { task: updatedData }, { new: true })
      .then(() => {
        return TodoModel.find();
      })
      .then(updatedTodos => {
        res.json(updatedTodos);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while updating the todo' });
      });
  });

app.post('/add',(req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>console.log(err))
})


app.listen(3001,()=>{
    console.log("Port is running in 3001")
})
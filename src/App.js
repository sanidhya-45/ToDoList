import {Fragment, useState} from 'react'

import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateTaskForm from './components/UpdateForm.jsx'
import ToDo from './components/ToDo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css';

function App() {

  // for tasks
  const[toDo, setToDo]= useState([])

  // temp state
  const[newTask, setNewTask]= useState('');
  const[updateData, setupdateData]= useState('');


  // add task
  const addTask= ()=>
  {
    if(newTask)
    {
      let num = toDo.length +1;
      // created the whole new task with id title and status
      let newEntry= {id: num, title: newTask, status:false}
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // delete task

  const deleteTask= (id)=>
  {
    let newTasks = toDo.filter(task => task.id!== id)
    setToDo(newTasks)
  }


  // marsk task as done
  const markDone = (id)=>
  {
    let newTask= toDo.map( task =>{ 
      if(task.id === id)
      { return({...task, status: !task.status})}
      return task;
     } )
    setToDo(newTask)
  }

  // cancel update
  const cancelUpdate= (id) =>
  {
    setupdateData('');
  }

  // change in update
  const  changeTask= (e) =>
  {
    let newEntry={
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true :false 
    }
    setupdateData(newEntry)
  }


  // for updating task
  const updateTask =()=>
  {
    let filterRecord= [...toDo].filter( task => task.id !== updateData.id)
    let updateObject=[...filterRecord, updateData]
    setToDo(updateObject)
    setupdateData('');
  }
  
  return (
    <div className=" container App">
      <br></br>
      <h2> To Do List</h2>
      <br></br>


    {/* for updating tasks*/ }
    { updateData && updateData? (
      <UpdateTaskForm
        updateData= {updateData}
        updateTask= {updateTask}
        cancelUpdate= {cancelUpdate}
        changeTask= {changeTask}
      />
    )
    :(
      
      <AddTaskForm
      newTask={ newTask}
      setNewTask={setNewTask}
      addTask={addTask}
      />
    )
    }

    
    {/* for displaying */}
    {toDo && toDo.length ? '':'No Tasks..'}

    <ToDo
    toDo ={toDo}
    markDone={markDone}
    setupdateData={setupdateData}
    deleteTask={deleteTask}
    />
    
    </div>
  );
}

export default App;

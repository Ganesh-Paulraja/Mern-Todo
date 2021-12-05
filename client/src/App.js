import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

//componentst
import AddTask from './components/addTask/addTask.js'
import ShowTask from './components/showTask/ShowTask.js'

function App() {
  const [allTasks, setallTasks] = useState([])

useEffect(() => {
 axios.get("https://todo-mern-node-host.herokuapp.com/api/tasks").then(res=>
 setallTasks(res.data)).catch(err=>console.log("axios.get-"+err))
}, [])
console.log(allTasks)

const addTaskAll = (task) => {
  setallTasks([...allTasks,task])
  console.log(allTasks)
}

const removeInAlltask =(res)=>{
  const newList = allTasks.filter(item => !(item._id === res._id))
  setallTasks(newList)
}

const isCompleteInAll=(res)=>{
  const newList = [...allTasks]
  newList.forEach(item=> {if(item._id === res._id){  item.isComplete=res.isComplete}})
  setallTasks(newList)
}

return( <div>
  <AddTask addTaskAll={addTaskAll}/>
  <ShowTask allTasks={allTasks} removeInAlltask={removeInAlltask} isCompleteInAll={isCompleteInAll}/>
</div> )
}

export default App;

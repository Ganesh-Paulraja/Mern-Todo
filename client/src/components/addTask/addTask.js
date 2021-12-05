import React,{useState} from 'react'
import axios from 'axios'
import './addTask.css'


export default function AddTask(props) {
 const [task, settask] = useState("")


 const addSingleTask =function(e){
     e.preventDefault()
    if(task.trim() === ''){
        return 
    } else {
        axios.post('https://todo-mern-node-host.herokuapp.com/api/tasks' , {
            todo : task,
            isComplete : false
        }).then(res => {
            settask("")
            props.addTaskAll(res.data)
        }).catch(err => console.log("axios.post ="+err))
    }
 }

    return (
        <form className="addTask" onSubmit={(e)=>addSingleTask(e)}>

            <input type="text" value={task} onChange={(e)=>settask(e.target.value)} placeholder="Enter your task..."/>
            <button>Add</button>
            
        </form>

    )
}

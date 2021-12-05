import axios from 'axios'
import React from 'react'
import './ShowTask.css'



export default function ShowTask(props) {

    const removeTask = (id)=>{
        axios.delete(`https://todo-mern-node-host.herokuapp.com/api/tasks/${id}`).catch(err=>console.log(err)).then(res=>
         props.removeInAlltask(res.data))
        }

        const taskComplete = task => {
const completefun =(isComplete)=>{
    if(isComplete){
        isComplete = false
    }
    else{isComplete  = true}
    return isComplete;
}

            axios.put(`https://todo-mern-node-host.herokuapp.com/api/tasks/${task._id}` , {
                isComplete : completefun(task.isComplete)
            }).then(res => props.isCompleteInAll(res.data)).catch(err => console.log(err))
        }

    return (
        <div className="showTask">
           {props.allTasks.map((x)=>{
               return(<div key={x._id} >
                   <div onClick={()=>taskComplete(x)} className={x.isComplete?"task isComplete":"task"}  >
                       {x.todo} 
                   </div>
                   <span><button className="removeBtn"
                   onClick={()=>removeTask(x._id)}>remove</button></span>
                   </div>
               )
           })}
        </div>
    )
}

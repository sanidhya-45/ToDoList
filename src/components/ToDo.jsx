import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'
const ToDo = ({ toDo , markDone, setupdateData, deleteTask}) =>{
    return(
        <>
        {toDo && toDo

    .sort((a,b) => a.id>b.id? 1:-1)
    .map((task, index) =>
    {
        return (
                    <fragment key={task.id}>
                    <div className="col taskbg">
            
                        <div className={task.status? 'done':''}>
                            <span className="taskNumber">{index+ 1 }</span>
                            <span className="taskText">{task.title}</span>
                        </div>
            
                        <div className="iconsWrap">
                            <span title='Completed/ Not Completed'
                            onClick={(e)=>markDone(task.id)}
                            > 
                            <FontAwesomeIcon icon= {faCircleCheck}/>
                            </span>
                            {
                            // edit  
                            }
                            {task.status ? null :
                            <span 
                            title='Edit'
                            onClick={() => setupdateData({
                            
                            id: task.id,
                            title: task.title,
                            status: task.status? true:false
                            } )}
                            >
                            <FontAwesomeIcon icon= {faPen}/>
                            </span>
                            }
                            <span 
                            onClick={()=> deleteTask(task.id)}
                            title="Delete"> 
                            <FontAwesomeIcon icon= {faTrashCan}/>
                            </span>
                        </div>
            
                    </div>
                    
                    </fragment>
                )
                })
                
            }
            </>
    )
}
export default ToDo;
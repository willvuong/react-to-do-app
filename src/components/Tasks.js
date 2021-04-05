import Task from './Task.js'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    
    return (
        <>
          {tasks.map((myTasks) => (
          <Task key={myTasks.id} 
          task={myTasks} 
          onDelete={onDelete}
          onToggle={onToggle} />)) }  
        </>
    )
}

export default Tasks

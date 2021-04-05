import { useState } from 'react'

import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'Feb 6th at 5:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 7th at 5:00pm',
        reminder: false,
    },
    {
      id: 4,
      text: 'Driving School',
      day: 'Feb 8th at 1:30pm',
      reminder: false,
    },
    {
      id: 5,
      text: 'Haircut',
      day: 'Feb 8th at 3:00pm',
      reminder: false,
    }
])

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    console.log(id)
  }

  return (
    <div className='app'>
      <Header onShowAddTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAddTask={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );

}



export default App;

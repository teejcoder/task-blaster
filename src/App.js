import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Skateboarding",
      day: "Today 4pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Full Stack Job Interview",
      day: "Today 2pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Buy stuff with money",
      day: "May 20th 1pm",
      reminder: true,
    }
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder } : task))
  }



  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask
        (!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "No tasks to do!"
      )}
      
    </div>
  );
}

export default App;

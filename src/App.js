import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask()
      setTask(taskFromServer)
    }
    getTask()
  }, [])

  const fetchTask = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const saveTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks ', {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTask([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTask(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id 
      ? {...task, reminder: !task.reminder} 
      : task));
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd ={showAddTask}
      />
      {showAddTask && <AddTask onAdd={saveTask}/>}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : 'No task to show'
      }
    </div>
  );
}

export default App;

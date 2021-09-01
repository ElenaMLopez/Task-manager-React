import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import AwesomeInfo from './components/AwesomeInfo';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks()
      setTask(taskFromServer)
    }
    getTask()
  }, [])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
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

  const toggleReminder = async (id) => {
    const taskToToggleReminder = await fetchTask(id)
    const updatedTask = {
      ...taskToToggleReminder, 
      reminder: !taskToToggleReminder.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()
    
    setTask(tasks.map((task) => task.id === id 
      ? {...task, reminder: data.reminder} 
      : task));
  }

  return (
    <Router>
      <div className="container">
        <Header 
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd ={showAddTask}
        />
        
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={saveTask}/>}
            {tasks.length > 0 ? 
              <Tasks 
                tasks={tasks} 
                onDelete={deleteTask} 
                onToggle={toggleReminder}
              /> 
              : 'No task to show'
            }
          </>
          )} />
        <Route path='/about' component={About} />
        <Route path='/awesome-info' component={AwesomeInfo} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

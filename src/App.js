import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Learn React',
      day: '26 August 2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Learn Redux',
      day: '29 August 2021',
      reminder: true,
    },
    {
      id: 3,
      text: 'Buy led switches',
      day: '26 August 2021',
      reminder: false,
    },
  ])

  const saveTask = (task) => {
    const id = uuidv4();
    const taskToAdd = {id, ...task};
    setTask([...tasks, taskToAdd]);

  }

  const deleteTask = (id) => {
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

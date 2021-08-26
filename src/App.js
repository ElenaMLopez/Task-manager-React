import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
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
     <Header />
     {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No task to show'
    }
    </div>
  );
}

export default App;

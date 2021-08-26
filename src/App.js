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
      reminder: true,
    },
  ])

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

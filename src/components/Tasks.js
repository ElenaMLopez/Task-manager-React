const tasks = [
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
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => <h3 key={task.id}>{task.text}</h3>)}
    </>
  )
}

export default Tasks

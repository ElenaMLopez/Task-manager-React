import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please enter a task text');
      return;
    }

    onAdd({ text, day, reminder })
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='taskText'>Task</label>
        <input 
          type='text' 
          id='taskText' 
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <div className='form-control'>
        <label htmlFor='taskDay'>Day & Time</label>
        <input 
          type='text' 
          id='taskDay' 
          placeholder='Add Day & Time' 
          value={day}
          onChange={(e) => setDay(e.target.value)} 
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='taskReminder'>Set Reminder</label>
        <input 
          type='checkbox' 
          id='taskReminder'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}

        />
      </div>

      <input 
        className='btn btn-block' 
        type='submit' 
        value='Save Task'
      />
      
    </form>
  )
}

export default AddTask

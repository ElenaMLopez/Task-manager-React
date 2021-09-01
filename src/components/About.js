import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about-container'>
      <h1>About</h1>
      <p>This is a simple Task Manager</p>
      <p>It's was created with React. Hope you like it!</p>
      <h4>V0.1.1</h4>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default About

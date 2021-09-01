import { Link } from 'react-router-dom';

const AwesomeInfo = () => {
  return (
    <div className='awesomeinfo-container'>
      <h2>Awesome Info</h2>
      <p>Here you can find some nice links about React.</p>
      <p>
        <a target='blank' href="https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2812s">
          React crash course 2021
        </a> 
        : Used to create this nice app.
      </p>
      <p>
        <a target='blank' href="https://reactjs.org/docs/getting-started.html">
          React documentation.
        </a> 
        : Getting started is the first step, but you can find a lot 
        of nice info in the documentation.
      </p>
      <p>
        <a target='blank' href="https://www.npmjs.com/package/json-server">
          Json-server 
        </a> 
        : This is a cool library if you don't want to use a backed, just follow the 
        instructions. One nice thing about this library is you don't need to create
        a random id for your entities, because it's created for you.
      </p>
      <p>
        <a target='blank' href="https://www.npmjs.com/package/uuid">
          Random id with uuid4
        </a> 
        : If you prefer to create a random id, you can use this package. Take a look 
        to the documentation, you got a lot of options to create different kinds of
        IDs!
      </p>
      

      <Link to="/">Home</Link>    
    </div>
  )
}

export default AwesomeInfo

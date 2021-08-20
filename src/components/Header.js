import PropTypes from 'prop-types';


const Header = ({ title }) => {
  return (
    <header>
     <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Manager',
}

Header.propTypes = {
  title: {
    type: PropTypes.string.isRequired,
  }
}
  

export default Header


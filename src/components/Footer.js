import { Link } from 'react-router-dom';
import { useLocation} from 'react-router-dom';


const Footer = () => {
  const location = useLocation();

  return (
    <footer className='footer-container'>
      <p>Copyright &copy; 2021</p>
      {location.pathname !== '/about' && <Link to="/about">About</Link>}
      {location.pathname !== '/awesome-info' && <Link to="/awesome-info">Awesome info</Link>}
    </footer>
  )
}

export default Footer

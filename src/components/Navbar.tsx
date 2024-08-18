import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar(): JSX.Element {
    return (
    <nav className='nav-bar'>
        <p><Link to='/'>RikmotAl Logo</Link></p> 
        <ul>
            <li><Link to='/about'>אודות</Link></li>
            <li><Link to='/contact'>צרו קשר</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar
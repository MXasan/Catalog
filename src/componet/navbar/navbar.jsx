import { Link } from 'react-router'
import BurgerMenu from '../../assets/burgerMenu.svg'
import './navbar.css'
const Navbar = () => {
	return (
		<div className='container'>
			<div className='navbarElememnts'>
				<Link to='/'>
					<h2 className='logo'>logo</h2>
				</Link>
				<div className='navZone'>
					<ul>
						<li>MAXSULOT</li>
						<li>ALOQA</li>
						<li>MALUMOT</li>
					</ul>
					<Link to='/cart'>
						<button className='btn navBtn'>BUYURTMA</button>
					</Link>
				</div>
        <div className="burgerMenuWrapper">
         <img className="burgerMenu" src={BurgerMenu} alt="" />
        </div>
			</div>
		</div>
	)
}

export default Navbar

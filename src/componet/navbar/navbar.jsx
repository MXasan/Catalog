import { Link } from 'react-router'
import './navbar.css'
const Navbar = () => {
	return (
		<div className='container'>
			<div className="navbarElememnts">
				<h2 className='logo'>logo</h2>
				<div className="navZone">
					<ul>
						<li>MAXSULOT</li>
						<li>ALOQA</li>
						<li>MALUMOT</li>
					</ul>
					<Link to="/cart">
						<button className='btn'>BUYURTMA</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
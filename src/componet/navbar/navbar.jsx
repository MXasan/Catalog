import { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerMenuIcon from '../../assets/burgerMenu.svg'
import './navbar.css'

const Navbar = () => {
	const [burgerMenuState, setBurgerMenuState] = useState(false)

	return (
		<div className="container">
			<div className="navbarElememnts">

				<Link to="/">
					<h2 className="logo">logo</h2>
				</Link>

				{/* Desktop nav */}
				<div className="navZone">
					<ul>
						<li>MAXSULOT</li>
						<li>ALOQA</li>
						<li>MALUMOT</li>
					</ul>
					<Link to="/cart">
						<button className="btn navBtn">BUYURTMA</button>
					</Link>
				</div>

				{/* Burger menu */}
				<div className="burgerMenuWrapper">
					<img
						className="burgerMenu"
						src={BurgerMenuIcon}
						alt="menu"
						onClick={() => setBurgerMenuState(prev => !prev)}
					/>

					{burgerMenuState && (
						<div className="burgerMenuInfo">
							<ul onClick={() => setBurgerMenuState(false)}>
								<li>MAXSULOT</li>
								<li>ALOQA</li>
								<li>MALUMOT</li>

								<Link to="/cart">
									<button className="btn navBtn">BUYURTMA</button>
								</Link>
							</ul>
						</div>
					)}
				</div>

			</div>
		</div>
	)
}

export default Navbar

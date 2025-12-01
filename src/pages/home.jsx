import Cards from '../componet/cardwrapper/cards/cards'
import Header from '../componet/header/header'
import Navbar from '../componet/navbar/navbar'

const Home = ({ product }) => {
	return (
		<div className="body">
			<div className="bgImage">
				<div className="bgLinerBlack">
					<div className="container">
						<Navbar />
						<Header />
					</div>
				</div>
			</div>
			<div className="container__Wapper">
				<Cards product={product} />
			</div>
		</div>
	)
}

export default Home
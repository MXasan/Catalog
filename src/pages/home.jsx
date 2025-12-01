import Card from '../componet/cardwrapper/cardswrapper'
import Header from '../componet/header/header'
import Navbar from '../componet/navbar/navbar'

const Home = () => {
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
				<Card />
			</div>
		</div>
	)
}

export default Home
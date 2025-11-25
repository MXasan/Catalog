import Card from '../componet/card/card'
import Footer from '../componet/footer/footer'
import Header from '../componet/header/header'
import MainSection from '../componet/main/MainSection'
import Navbar from '../componet/navbar/navbar'
import Process from '../componet/process/Process'

const HomePage = () => {
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
      <div className="container">
        <MainSection />
        <Card />
        <Process />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage


import './App.css'
import Navbar from '../navbar/navbar'
import Header from '../header/header'
import MainSection from '../main/MainSection'
import Card from '../card/card'

function App() {

  return (
    <>
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
        </div>
      </div>

    </>

  )
}

export default App

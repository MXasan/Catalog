import './App.css'
import Header from '../header/header'
import Card from '../cardwrapper/cardswrapper'
import Navbar from '../navbar/navbar'

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
        <div className="container__Wapper">
          <Card/>
        </div>
      </div>

    </>

  )
}

export default App

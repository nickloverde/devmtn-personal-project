import React from 'react'
import './css/style.css' 
import Header from './components/Header/Header'
import SubscribeAd from './components/SubscribeAd/SubscribeAd'
import Footer from './components/Footer/Footer'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
      {/* <SubscribeAd/> */}
      <Footer/>

    </div>
  );
}

export default App;

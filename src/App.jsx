
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import Phone from './Components/Phone/Phone'

import PriceOptions from './Components/PriceOptions/PriceOptions'
// import Daisynav from './Components/Nav/Daisynav'



function App() {
  

  return (
    <>
      {/* <Daisynav></Daisynav> */}

    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
   <Phone></Phone>
    </>
  )
}

export default App

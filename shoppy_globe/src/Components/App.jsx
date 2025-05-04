import { Outlet } from 'react-router-dom'
// import './App.css'
import Header from './Header'



// The main component

function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )

}

export default App;
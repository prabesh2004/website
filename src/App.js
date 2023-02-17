import React, { useEffect, useState } from 'react'
import Header from './Component/header/header'
import Nav from './Component/nav/nav'
import About from './Component/about/about'
import Exp from './Component/exp/exp'
import Portfolio from './Component/portfolio/portfolio'
import Contact from './Component/contact/contact'
import Footer from './Component/footer/footer'
import Loader from './Component/Loader/Loader'
const App = () => {
 const[loading,setloading]=useState(false);
 useEffect(()=>{
  setloading(true);
  setTimeout(()=>{
    setloading(false);
  },5000)
 },[])
  return (
<>
{loading ? (
  <Loader/>):(
   <div> 
<Header/>
<Nav/>
<About/>
<Exp/>
<Portfolio/>
<Contact/>
<Footer/> 
</div>
 )
}
</>
  )
}

export default App
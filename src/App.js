import React from 'react'
import Header from './Component/header/header'
import Nav from './Component/nav/nav'
import About from './Component/about/about'
import Exp from './Component/exp/exp'
// import Services from './Component/services/services'
import Portfolio from './Component/portfolio/portfolio'
// import Testi from './Component/testimonial/testi'
import Contact from './Component/contact/contact'
import Footer from './Component/footer/footer'
const App = () => {
  return (
<>
<Header/>
<Nav/>
<About/>
<Exp/>
{/* <Services/> */}
<Portfolio/>
{/* <Testi/> */}
<Contact/>
<Footer/>
</>
  )
}

export default App
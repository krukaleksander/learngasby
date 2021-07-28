import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"
const Layout = ({ children }) => {
  // mogłoby być też props.children, ale destrukturyzowałem
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

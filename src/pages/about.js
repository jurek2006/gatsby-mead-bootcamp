import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header></Header>
      <h1>About</h1>
      <p>About about about</p>
      <Link to="/contact">Contact Page</Link>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>About about about</p>
        <Link to="/contact">Contact Page</Link>
      </Layout>
    </div>
  )
}

export default AboutPage

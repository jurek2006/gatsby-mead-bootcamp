import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>About about about</p>
        <Link to="/contact">Contact Page</Link>
      </Layout>
    </div>
  )
}

export default AboutPage

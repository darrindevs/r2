// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
        <Seo title="About" />
      <main>
        <h1>About</h1>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default AboutPage
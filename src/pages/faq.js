// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const FaqPage = () => {
  return (
    <Layout>
        <Seo title="FAQ" />
        <main>
        <h2>FAQ</h2>
        <div id="about" className="container-component mt-5 mb-5">
          <h5><strong>Why is your NFT so awesome?</strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          <h5><strong>Why is your NFT so awesome?</strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          <h5><strong>Why is your NFT so awesome?</strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          <h5><strong>Why is your NFT so awesome?</strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          <h5><strong>Why is your NFT so awesome?</strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          </div>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default FaqPage
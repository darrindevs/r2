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
          <h5><strong>Why such a limited supply of NFTs?
            </strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          <h5><strong>How long will the project take?
          </strong></h5>
          <h5 className='mb-4'>Building value takes time. This is a complex process that can take up to three years.</h5>
          <h5><strong>Why is your NFT so awesome?</strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          <h5><strong>Why is your NFT so awesome?</strong></h5>
          <h5 className='mb-4'>Dude. Get in there.</h5>
          </div>
          <div id="about" className="container-component mt-5 mb-5">
            Got a question? Hit us up on <a href='https://twitter.com/1140nft'>Twitter</a>.
          </div>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default FaqPage
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
        <h2>About</h2>
        <div id="about" className="container-component mt-5 mb-5">
          <h3 className='mb-3'>Bradley Pierce</h3>
          <h5 className='mb-3'>Creator / Co-Founder &middot; <strong>1140nft</strong></h5>
          <p>In August of 2012 I returned to America from London. I was set on not paying rent ever again, so I bought a 1995 Econoline Van. I lived in that Econoline for almost five years working and saving a downpayment for a home. I finally closed on a property in November 2016. I knew I wanted to develop it to its full potential. </p>
          <p>Recent legislation allows subdividing lots for the purpose of sale. The need for affordable housing has also forced revision of the county’s Accessory Dwelling Unit (ADU) ordinance. The combined effect allows each of our four new lots to have its own ADU, doubling the potential of each lot. According to Senior Regional Planning Assistant Tina Fung, “This parcel is under-used and has potential.”  </p>
          <p>Even though these key pieces of legislation opened up development possibilities, there was another barrier. The growth potential was not feasible via traditional financing options. It is only now, as Web 3.0 provides new funding mechanisms that the solution presents itself. It’s time to connect Web3.0 to real estate development.</p>
          <p>We offer the most innovative NFT project in the space today because its value proposition is rooted in newly created real estate. 1140nft is a revolution in the NFT space. There has been no project like it. No NFT has catalyzed fundraising for real estate development and created a DAO with membership benefits derived from the NFT project. We believe that people both want to invest in real estate development long term and they also want to speculate along the way. 1140nft is the first project in the space to offer that. Novel projects like 1140nft are pushing the space in new directions. </p>
        </div>
        <div id="about" className="container-component mt-5 mb-5">
          <h3 className='mb-3'>Darrin Weyers</h3>
          <h5 className='mb-3'>Dev / Co-Founder &middot; <strong>1140nft</strong></h5>
          <p>The short version is that I ❤️ to make things.</p>
          <p>The longer version is that for the last 22 years I have been either founding, co-founding or working for Bay Area tech start-ups in the domains of product, marketing, business development, and web technologies. </p>
          <p>I am super passionate about the potential of Web 3 at a technological, financial and cultural level.  The NFT as funding mechanism + member DAO as a vehicle for investor ROI make <strong>1140nft</strong> a no-brainer project for me to get involved with. LFG.</p>
          <p><a href="https//:twitter.com/helloDarrin" target="blank">Get in touch</a>.</p>
        </div>
        <div id="about" className="container-component mt-5 mb-5">
          <p>* Bradley and Darrin have known each for <strong>35 years</strong>. <i>(Ask about the <strong>Food Fight</strong>).</i> Follow <strong>1140nft</strong> on <a href="https//:twitter.com/1140nft" target="blank">Twitter</a>.</p>
          <p> </p>
        </div>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default AboutPage
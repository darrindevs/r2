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
          <h5><strong>Why such a limited supply of NFTs?
            </strong></h5>
          <p className="mt-3">1140nft is limited to a supply of 1140. The supply is designed to limit 1140DAO memberships and make 1140DAO attractive as both a short-term and long-term investment. 
          </p>
          
          <h5 className="faq"><strong>How long will the project take?
          </strong></h5>
          <p className="mt-3"> Building value takes time. This is a subdivision project that creates new property and homes. It’s a complex process that will take up to three years to complete.

          </p>
         

          <h5 className="faq"><strong>Where do I stake my NFT?</strong></h5>
          <p className="mt-3">You don’t. You have full control to buy and hold, or speculate along the way. Long term holders will receive the most benefits in 1140DAO.
          </p>

          <h5 className="faq"><strong>What is 1140DAO?</strong></h5>
          <p className="mt-3">Our decentralized autonomous organization (DAO) is the mechanism by which we reward our members. 1140DAO will also represent the governing body of 1140nft holders.

          </p>
          <p className="mt-3">All members of 1140DAO will share governance, voting rights, profits and access benefits. Long term holders will receive the most benefits in 1140DAO.
          </p>

          <h5 className="faq"><strong>When is 1140DAO?</strong></h5>
          <p className="mt-3">1140DAO will be implemented once construction is complete, but your points toward the DAO start accruing immediately when an 1140nft is purchased or traded.Long term holders will receive the most benefits in 1140DAO.
          </p>

          </div>
          <div id="about" className="container-component mt-5 mb-5">
            <p> Got another question? Check out the  <Link className="" to="/whitepaper"> Whitepaper</Link> or hit us up on <a href='https://twitter.com/1140nft'>Twitter</a>.

            </p>
           
          </div>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default FaqPage
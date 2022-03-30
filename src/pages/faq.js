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
          <p className="mt-3">1140nft is limited to a supply of 1140 NFTs. The low supply cap is designed to make 1140DAO attractive as both a short-term and long-term investment.
          </p>
          <p className="mt-3">In the short-term, the low supply will stimulate secondary market sales for those who wish to speculate or trade the NFT. 
          </p>
          <p className="mt-3"> In the long-term, the limited supply acts as a cap on the number of <strong>1140DAO</strong> members, which makes the DAO exclusive and increases the return on investment per member through the profit sharing mechanisms.
          </p>
          <h5 className="faq"><strong>How long will the project take?
          </strong></h5>
          <p className="mt-3"> Building value takes time. This is a real-world capital project that creates new property and equity. This is a complex process that will take multiple years. 
          </p>
          <p className="mt-3">Profit sharing will begin once construction is complete and will continue for the life of the DAO. That being said, there will be opportunities for investors to realize a return on investment throughout the life of the project.
          </p>

          <h5 className="faq"><strong>Where do I stake my NFT?</strong></h5>
          <p className="mt-3">You don’t. You have full control to buy and hold, or speculate along the way. As long as you simply hold the NFT in your wallet you will accrue points toward <strong>1140DAO</strong>. Long term holders will receive the most benefits in <strong>1140DAO</strong>.
          </p>

          <h5 className="faq"><strong>What is 1140DAO?</strong></h5>
          <p className="mt-3">DAO stands for Decentralized Autonomous Organization. <strong>1140DAO</strong> will be essentially an exclusive club of <strong>1140nft</strong> holders. All members of <strong>1140DAO</strong> will have governance and voting rights, profit sharing and access benefits.
          </p>
          <p className="mt-3"><strong>1140DAO</strong> will be established once construction is complete, but points toward the DAO start accruing immediately when an <strong>1140nft</strong> is purchased or traded. 
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
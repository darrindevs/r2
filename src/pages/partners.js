import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Partners = () => (
  <Layout>
    <Seo title="Partners" />
    <main>
        <h2>Partners</h2>
        <div id="about" className="container-component mt-5 mb-5">
          <h3 className='mb-3'>AMK Studio</h3>
          <h5 className='mb-3'>Architecture & Planning &middot; Newport Beach, CA</h5>
          <p>We design distinctive, timeless and cool spaces for awesome people.
          Our designs empower builders, developers and aspiring homeowners to create vibrant, innovate projects that enhance the joy & well-being of individual homes and communities.</p>
          <p>We are AMK studio, an award-winning, women-owned, architectural and planning firm in Southern California, servicing clients in the Western U.S.</p>
          
          <p><a href="https://www.amkstudio.com/" target="blank">Learn more</a>.</p>
        </div>
        <div id="about" className="container-component mt-5 mb-5">
          <h3 className='mb-3'>Denn Engineers</h3>
          <h5 className='mb-3'>Land Survey & Design &middot; Torrance, CA</h5>
          <p>Denn Engineers is a land survey and civil design firm specializing in Residential and Commercial Surveying including Boundary, Topographic, ALTA, and AsBuilt Surveys; Subdivisions, including Tentative Maps, Final Maps, and Condominium Plans; Construction Survey, Staking, and Certifications; Property Line Disputes; Lot Line Adjustments; and Legal Descriptions.</p>
          <p>We have been serving Southern California for over 60 years.</p>
          <p><a href="http://www.denn.com/" target="blank">Learn more</a>.</p>
        </div>
        <div id="about" className="container-component mt-5 mb-5">
          <h3 className='mb-3'>Dynamo</h3>
          <h5 className='mb-3'>Web Development & Marketing &middot; Oakland, CA</h5>
          <p>Dynamo provides dynamic solutions for a digital world.</p>
          <p>We specialize in web development + design, Web 3 + NFT development, and digital marketing. We love helping clients bring their projects to life.</p>
          <p><a href="https://www.dynamo.dev/" target="blank">Learn more</a>.</p>
        </div>
        <div id="about" className="container-component mt-5 mb-5">
          <p>Looking to partner with <span className="eleven-forty">1140nft</span>? Reach out on <a href="https//:twitter.com/1140nft" target="blank">Twitter</a>.</p>
          <p> </p>
        </div>
    </main>
  </Layout>
)

export default Partners

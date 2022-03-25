import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container-component mt-5">
      <h1 className="1140">1140nft</h1>
      <h2 id="tagline" className='mb-3 mt-3'><span>The World's First NFT Funded</span><br></br><span>Real Estate Development</span> </h2>
      <p className="mb-4">1140nft is an innovative NFT project that shares the value of real world real estate with the holders. The NFT funds the development of properties in Los Angeles into rental and resale properties. The NFT holders will have member access to the properties and share in rental and resale revenues.</p>
      <h5 className="mt-3 mb-5">* Coming Summer 2022 *</h5>
      <button type="button" className="btn btn-outline-primary mt-2">Do Something</button>
    </div>
   
  </Layout>
)

export default IndexPage

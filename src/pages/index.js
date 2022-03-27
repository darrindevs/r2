import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HeroImg from "../components/heroimg"
import Box1 from "../components/box1"
import Box2 from "../components/box2"
import Box3 from "../components/box3"
import Ltv from "../components/ltv"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroImg />
    <Ltv />
    <Box2 />
    
   
    
  </Layout>
)

export default IndexPage

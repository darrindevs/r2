import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HeroImg from "../components/heroimg"
//import Box1 from "../components/box1"
//import Box2 from "../components/box2"
//import Box3 from "../components/box3"
import Ltv from "../components/ltv"
import LtvM from "../components/ltv-m"
//import Location from "../components/location"
import LocationM from "../components/location-m"
//import Timeline from "../components/timeline"
import Cta2 from "../components/cta2"
import Formspree from "../components/formspree"




const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Ltv />
    <LtvM />
<LocationM />
    <Cta2 />
  </Layout>
)

export default IndexPage

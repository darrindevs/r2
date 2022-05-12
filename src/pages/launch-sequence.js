// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const LaunchSequencePage = () => {
  return (
    <Layout>
        <Seo title="Launch Sequence" />
      <main>
        <div className='heading-page'>
            <h2 className="undertitle mb-5">Launch Sequence</h2>
        </div>
        {/* Box */}
        <div id="box-entitlement-launch" className="box-blue">
        <Row className="box-timeline">
            <Col  id="" className="mb-5" lg={{ span: 5, offset: 0 }}>
               <div className='timeline-title'>
               <h3 className='pt-3'>-> Entitlement Launch</h3>
               <h5 className='ms-5'>Summer 2022</h5>
               </div>
               <div id="entitlement-list" className='ms-5 mt-5'>
                   <ul>
                       <li>100 NFts</li>
                       <li>Genesis Tier</li>
                       <li>Highest Accomodation Priorityl</li>
                       <li>Max Holder Benefits</li>
                       <li>Discounted Price Point</li>
                       <li>Best Value</li>
                   </ul>
               </div>
               
            </Col>
               <Col  id="" className="pt-3 ope-3" sm={{ span: 7, offset: 0 }}>
               <div className='img-distro'>
                <StaticImage
                    src="https://zno.s3.us-west-1.amazonaws.com/rarity_distro_1.png"
                    quality={100}
                    alt="Rarity Distribution"
                    />
               </div>
               </Col>
        </Row>
    </div>
     {/* Box */}
     <div id="" className="box-null mb-5">
        <Row className="box-timeline">
        <Col  id="" className="mt-5" lg={{ span: 5, offset: 0 }}>
            <div className='timeline-title'>
               <h5 className=''>-> Foundation Launch</h5>
            </div>
            <div id="later-list" className='ms-5'>
                   <ul>
                       <li>300 NFts</li>
                       <li>Traits TBD</li>
                   </ul>
               </div>
            <div className='timeline-title'>
               <h5 className='pt-5'>-> Turnkey Launch</h5>
            </div>
            <div id="later-list" className='ms-5'>
                   <ul>
                       <li>600 NFts</li>
                       <li>Traits TBD</li>
                   </ul>
               </div>
        </Col>
        <Col  id="" className="ps-3" sm={{ span: 7, offset: 0 }}>
              
        </Col>
        </Row>
    </div>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default LaunchSequencePage
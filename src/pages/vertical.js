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
const VerticalPage = () => {
  return (
    <Layout>
        <Seo title="Vertical" />
      <main>
        <div className='heading-page'>
            <h2 className="undertitle mb-5">Launch Sequence</h2>
        </div>
     {/* Row BLue Box Timeline */}
        <div id="box-entitlement-launch" className="bg-primary">
        <Row className="">
            <Col  id="" className="" lg={{ span: 6, offset: 0 }}>
              <div className=''>
              <h3 className='text-end'>Entitlement Launch -></h3>
              </div>
              <div id="entitlement-list" className='me-5 mt-5 text-end'>
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
            <Col  id="" className="line-left" sm={{ span: 6, offset: 0 }}>
             <div className="">
                  <h4 className='mt-1'>Summer 2022</h4>
                </div>
                <div id="entitlement-list" className='ms-5 mt-5'>
                   <ul>
                       <li>100 NFts</li>
                       <li>Genesis Tier</li>
                       <li>Highest Accomodation Priorityl</li>
                       <li>Max Holder Benefits</li>
                       <li>Discounted Price Point</li>
                       <li>Best Value</li>
                       <li>Leaderboard Something</li>
                   </ul>
               </div>
            </Col>
        </Row>
    </div>
     {/* Row */}
     {/* Row BLue Box Rairtities*/}
     <div id="entitlement-rarities" className="bg-secondary">
        <Row className="">
            <Col  id="" className="" lg={{ span: 12, offset: 0 }}>
            <div className='img-distro text-center'>
                <StaticImage
                    src="https://zno.s3.us-west-1.amazonaws.com/rarity_distro_1.png"
                    quality={100}
                    alt="Rarity Distribution"
                    />
               </div>
            </Col>
        </Row>
    </div>
     {/* Row Light Box Secondary Launches s*/}
     <div id="secondary-launch" className="bg-danger">
        <Row className="">
            <Col  id="" className="" lg={{ span: 6, offset: 0 }}>
              <div className=''>
                  <h4 className='text-end'>Foundation Launch -></h4>
              </div>
            </Col>
            <Col  id="" className="line-left" sm={{ span: 6, offset: 0 }}>
            <div id="foundation-list" className='ms-5'>
                   <ul>
                       <li>300 NFts</li>
                       <li>Full Benefits</li>
                       <li>Full Price</li>
                       <li>Foundation Traits</li>
                   </ul>
               </div>
            </Col>
        </Row>
        
        <Row className="">
            <Col  id="" className="" lg={{ span: 6, offset: 0 }}>
              <div className=''>
                  <h4 className='text-end'>Turnkey Launch -></h4>
              </div>
            </Col>
            <Col  id="" className="line-left" sm={{ span: 6, offset: 0 }}>
            <div id="turnkey-list" className='ms-5'>
                   <ul>
                       <li>600 NFts</li>
                       <li>Full Benefits</li>
                       <li>Full Price</li>
                       <li>Turnkey Traits</li>
                   </ul>
               </div>
            </Col>
        </Row>
    </div>
    {/* Row Blue Box Benefits */}
    <div id="launch-benefits" className="bg-warning">
        <Row className="">
            <Col  id="" className="" lg={{ span: 6, offset: 0 }}>
              <div className=''>
                  benfits 
              </div>
               
            </Col>
            <Col  id="" className="line-left" sm={{ span: 6, offset: 0 }}>
            <div className=''>
                  benefits
              </div>
            </Col>
        </Row>
    </div>
     {/* Row CTA */}
     <div id="launch-cta" className="bg-info">
        <Row className="">
            <Col  id="" className="" lg={{ span: 12, offset: 0 }}>
            <div>
  <canvas id="myChart"></canvas>
</div>
               
            </Col>
           
        </Row>
    </div>
      </main>
     
    </Layout>
    
  )
}

// Step 3: Export your component
export default VerticalPage
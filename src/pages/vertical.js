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
                  Entitlement Launch
              </div>
               
            </Col>
            <Col  id="" className="line-left" sm={{ span: 6, offset: 0 }}>
            <div className=''>
                  Summer 2022
              </div>
            </Col>
        </Row>
    </div>
     {/* Row */}
     {/* Row BLue Box Rairtities*/}
     <div id="entitlement-rarities" className="bg-secondary">
        <Row className="">
            <Col  id="" className="" lg={{ span: 12, offset: 0 }}>
              <div className=''>
                  the image
              </div>
            </Col>
        </Row>
    </div>
     {/* Row Light Box Secondary Launches s*/}
     <div id="secondary-launch" className="bg-danger">
        <Row className="">
            <Col  id="" className="" lg={{ span: 6, offset: 0 }}>
              <div className=''>
                  foundation launch
              </div>
            </Col>
            <Col  id="" className="line-left" sm={{ span: 6, offset: 0 }}>
            <div className=''>
                  later
              </div>
            </Col>
        </Row>
        <Row className="">
            <Col  id="" className="" lg={{ span: 6, offset: 0 }}>
              <div className=''>
                  tuenkeuy launch
              </div>
            </Col>
            <Col  id="" className="line-left" sm={{ span: 6, offset: 0 }}>
            <div className=''>
                  later
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
              <div className=''>
                  do something 
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
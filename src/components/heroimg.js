import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const HeroImg = () => (
    <div id="hero" className="container-component mt-5">
        <Row>
            <Col  id="value" sm={{ span: 6, offset: 0 }}>
                <h1 className="1140">1140nft</h1>
                <h2 id="tagline" className='mb-3 mt-3'><span>The World's First NFT Funded</span><br></br><span>Real Estate Development</span> </h2>
                <p className="mb-4">1140nft is an innovative NFT project that shares the value of real world real estate with its holders. The NFT will fund the development of properties in Los Angeles into rental and resale properties. 1140nft holders will have member access to the properties and share rental and resale revenues.</p>
                 <h5 className="mt-3 mb-5">* Coming Summer 2022 *</h5>
                <button type="button" id="cta-a" className="btn btn-outline-primary mt-2">Do Something</button>
            </Col>
            <Col  id="value" sm={{ span: 6, offset: 0 }}>
                <div className="fill">
                 <img className="img-a" align="" src="https://zno.s3.us-west-1.amazonaws.com/blueprint1.jpeg" />
                 {/*<img className="img-a" align="" src="https://zno.s3.us-west-1.amazonaws.com/1140_2.JPG" />   */}
                </div>
            </Col>
        </Row>
    </div>
  );
  
  export default HeroImg;
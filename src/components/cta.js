import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Cta = () => (
    <div id="cta" className="container-component mt-5 mb-5">
        <Row>
            <Col  id="value" lg={{ span: 6, offset: 0 }}>
                <div id="launching" className="">
                    <h3>Early Access</h3>
                    <p className="mt-3"><strong>1140nft</strong> will be launching soon. Supply will be limited to 1140 total NFTs. </p>
                    <p className="mt-3">Follow our journey on Twitter to learn how to get <strong>early access</strong>.</p>
                </div>
            </Col>
            <Col  id="value" lg={{ span: 6, offset: 0 }}>
           
            </Col>
        </Row>
        <Row>
            <Col  id="value" lg={{ span: 4, offset: 0 }}>
            </Col>
            <Col  id="value" lg={{ span: 4, offset: 0 }}>
                <div id="" className="d-flex justify-content-center mt-3">
                <button type="button" className="btn btn-primary mt-2">Follow Us</button>
                </div>
            </Col>
            <Col  id="value" lg={{ span: 4, offset: 0 }}>
            </Col>
        </Row>
       
        
    </div>
  );
  
  export default Cta;
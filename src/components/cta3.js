import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Cta3 = () => (
    <div id="cta2" className="container-component mb-5">
        <> 
        <Row>
            <Col  id="value" className="pe-5" lg={{ span: 7, offset: 0 }}>
            <h3>Early Access</h3>
            <span>______________________________________</span>
                 <p className="mt-3"><strong>1140nft</strong> will be launching soon. Supply is limited to 1140 total NFTs. Follow us on Twitter to get notified of <strong>early access</strong> and more.</p>
                 
            </Col>
            <Col  id="" className="ps-5" sm={{ span: 5, offset: 0 }}>
                <div id="cta-form" className="d-flex justify-content-start">
                   
                    <button type="button" className="btn btn-red mt-2"><a className="btn-red" href="https://twitter.com/1140nft" target="blank">Let's Go</a></button>
                </div>
            </Col>
        </Row>
        
        </>
    </div>
  );
  
  export default Cta3;
import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Location = () => (
    <div id="location" className="container-component mt-5 bc1">
      <Row>
            <Col  id="loc-col" lg={{ span: 5, offset: 0 }}>
                <div className="mt-3 ms-3">
                    <h3 className="mb-3"><span className="ico-location-dot me-2"></span>Prime Location</h3>
                    <p className="">
                    1140nft has already purchased <strong>9200 sq ft</strong> of prime real estate within an unincorporated, multifamily, R2 zone in Los Angeles. 
                    </p>
                    <p>
                    Our lot is centrally located in LA county, minutes from popular destinations.
                    </p>
                    <div className="mb-3">
                        <span className="">___________________</span>
                    </div>
                </div>

            </Col>
            <Col  id="" lg={{ span: 6, offset: 1 }}>
                <div className="d-flex justify-content-start ms-3 mt-3">
                <ul>
                <li>LA Metro Station <strong>1 mile</strong></li>
                <li>Sofi Stadium <strong>3 miles</strong></li>
                <li>Clippers Intuit Dome <strong>3 miles</strong></li>
                <li>LA Forum <strong>3 miles</strong></li>
                <li>USC <strong>5 miles</strong></li>
                <li>George Lucas Museum of Narrative Arts <strong>5 miles</strong></li>
                <li>Crypto.com Arena <strong>6 miles</strong></li>
                <li>Downtown LA <strong>7 miles</strong></li>
                <li>LAX <strong>7 miles</strong></li>
                <li>Hermosa Beach <strong>9 miles</strong></li>
                <li>Venice Beach <strong>15 miles</strong></li>
            </ul>
                </div>
            </Col>
        </Row>
    </div>
  );
  
  export default Location;
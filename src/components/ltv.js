import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Ltv = () => (
    <div id="ltv" className="container-component mb-5">
        <> 
        <Row>
            <Col  id="value" className="pe-5" lg={{ span: 7, offset: 0 }}>
                {/*}
                <span className=""> ________________</span>
                <span className=""> ________________</span>
                <span className="nakunaru"> ________________</span>
                <span className="nakunaru"> ________________</span>
                
                */}
                <h3>The Long-Term Value NFT</h3>
                <p className='benefits-p mt-4'>1140nft is a long-term capital project that will reward early investors exponentially. </p>
                    <p>NFT holders earn points toward 1140DAO every day that they hold the token in their wallet. 1140DAO will provide members with long-term recurring passive income opportunities.</p>
            </Col>
            <Col  id="bennys" className="ps-5" sm={{ span: 5, offset: 0 }}>
                    <ul>
                        <li>Innovative Model</li>
                        <li>Real World Value</li>
                        <li>Limited Supply</li>
                        <li>Member <strong>DAO</strong></li>
                        <li>Voting + Governance</li>
                        <li>Rental Income Profit Sharing</li>
                        <li>Resale Income Profit Sharing</li>
                        <li>IRL Property Access</li>
                    </ul>
                </Col>
        </Row>
        
        </>
    </div>
  );
  
  export default Ltv;
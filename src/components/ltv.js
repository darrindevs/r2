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
                <h3>Long-Term Value NFT</h3>
                <p className='benefits-p mt-4'><strong>1140nft</strong> is a long-term capital project that will grow exponentially and reward investors continuously. </p>
                    <p>NFT holders earn points toward 1140DAO every day. Our algorithm accounts for both hold time and quantity of tokens held. More points equals a greater share of DAO benefits.</p>
                    <p>1140DAO rewards members with recurring passive income and long term payouts.</p>
            </Col>
            <Col  id="bennys" className="ps-5" sm={{ span: 5, offset: 0 }}>
                    <ul>
                        <li>Limited Supply</li>
                        <li>Innovative Model</li>
                        <li>Real World Value</li>
                        <li>1140DAO Membership</li>
                        <li>Voting & Governance</li>
                        <li>Profit Sharing: Rental Revenue</li>
                        <li>Profit Sharing: Sales Proceeds</li>
                        <li>IRL Property Access</li>
                        <li>Doxxed Founders</li>
                        <li>Doxxed Partners</li>
                        <li>Doxxed Permits</li>
                    </ul>
                </Col>
        </Row>
        
        </>
    </div>
  );
  
  export default Ltv;
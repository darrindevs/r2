import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const CtaM = () => (
    <div id="cta-m" className="container-component mb-5">
        <> 
        <Row>
            <Col  id="value" className="pe-5" lg={{ span: 7, offset: 0 }}>
            <h3>Early Access</h3>
            <span>__________________________</span>
                 <p className="mt-3"><strong>1140nft</strong> will be launching soon. Supply is limited to 1140 total NFTs. Follow us on Twitter to get notified of <strong>early access</strong> and more.</p>
                 
            </Col>
            <Col  id="" className="ps-3" sm={{ span: 5, offset: 0 }}>
            <div id="cta-form" className="d-flex justify-content-start">
                    <form>
                        <div id="form-email" class="form-row">
                            <div class="col-auto">
                                <form
                                action="https://formspree.io/f/xknyzyvy"
                                 method="POST"
                                >
                                <label className="mb-2">Join the newsletter</label>
                                <input type="email" name="email" class="form-control mb-2" id="inlineFormInput" placeholder="your email" required></input>
                                <button type="submit" className="btn btn-red mt-3">Let's Go</button>
                                </form>
                            </div>
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
        
        </>
    </div>
  );
  
  export default CtaM;
import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Timeline = () => (
    <div id="timeline" className="container-component mt-5 bc1">
      <Row>
      <Col  id="value" lg={{ span: 9, offset: 0 }}>
                <span className=""> ________________</span>
                <span className=""> ________________</span>
                <span className="nakunaru"> ________________</span>
                <span className="nakunaru"> ________________</span>
                <h3>Project Timeline</h3>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
    <div className='timeline-container'>
       <div className="timeline-item">
           <div className="timeline-item-content">
               <h6><span className="badge bg-secondary mb-2">Phase 1</span><span className='phase-label completed ms-3'><i>Completed</i></span></h6>
               <h5 className="ms-2">Land Acquisition<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
               <h5 className="ms-2 mt-2">Geotechnical Survey, Boundary Survey, Alley Dedication Waiver<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
               <h5 className="ms-2 mt-2">Certificate of Completion, Fire Hydrant Flow Rate Certification<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
               <h5 className="ms-2 mt-2">AMK Design Partnership<span className="badge rounded-pill bg-success ms-3 timeline-badge">Complete</span></h5>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>Feb 2022</i></span></h6>
               <h5 className="ms-2 event-name">Superbowl LVI &middot; SoFi Stadium</h5>
               <span className="event-meta"><span></span>3 miles away</span>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Phase 2</span><span className='phase-label ms-3'><i>Summer 2022</i></span></h6>
               <h5 className="ms-2 mt-2">NFT Launch</h5>
               <h5 className="ms-2 mt-2">NFT Holders Start Accruing Points</h5>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2022</i></span></h6>
               <h5 className="ms-2 event-name">Metro Crenshaw Line Opening</h5>
               <span className="event-meta"><span></span>2 miles away</span>
               
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Phase 2</span><span className='phase-label ms-3'><i>2022 - 2023</i></span></h6>
               <h5 className="ms-2 mt-2">Design, Architecture, and Engineering</h5>
               <h5 className="ms-2 mt-2">Entitlement and Permitting</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2023</i></span></h6>
               
               <h5 className="ms-2 mt-2 event-name">Lucas Museum of Narrative Arts Opening</h5>
               <span className="event-meta"><span></span>3 miles away</span>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Phase 3</span><span className='phase-label ms-3'><i>2023 -2024</i></span></h6>
               <h5 className="ms-2 mt-2">Construction</h5>
               <h5 className="ms-2 mt-2">Certificate of Occupancy</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2024</i></span></h6>
               <h5 className="ms-2 event-name">Clippers Intuit Dome Opening</h5>
               <span className="event-meta"><span></span>3 miles away</span>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Phase 4</span></h6>
           <h5 className="ms-2 mt-2">DAO Launch</h5>
           <h5 className="ms-2 mt-2">DAO Rental Revenue Profit Sharing</h5>
           <h5 className="ms-2 mt-2">DAO Access + Accommodation</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Phase 5</span><span className='phase-label ms-3'><i>2024</i></span></h6>
               <h5 className="ms-2 mt-2">Acquisition + Development</h5>
               <h5 className="ms-2 mt-2">DAO Profit Sharing + Access</h5>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Phase 6</span><span className='phase-label acquisition ms-3'><i>2027 - 2028</i></span></h6>
               <h5 className="ms-2 mt-2">Liquidation of Select Properties</h5>
               <h5 className="ms-2 mt-2">DAO Profit Sharing</h5>
               
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2028</i></span></h6>
               <h5 className="ms-2 event-name">Summer Olympics</h5>
               <span className="event-meta"><span></span>3 miles away</span>
               <h5 className="ms-2 mt-2">Member Access</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="">
               <span className="perpetuity"><span class="badge bg-primary continuation">Continuation of DAO</span></span>
           </div>
       </div>
       <h3>&nbsp;</h3>
   </div>
    </Row>
    </div>
  );
  
  export default Timeline;
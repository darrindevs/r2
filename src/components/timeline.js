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
                <h3>Project Timeline + Milestones</h3>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
    <div className='timeline-container'>
        
       <div className="timeline-item">
           <div className="timeline-item-content">
               <h6><span className="badge bg-secondary mb-2">Pre-Launch</span><span className='phase-label completed ms-3'><i><span className="completed">Completed</span></i></span></h6>
               <h5 className="ms-2 tl-item">Land Acquisition</h5>
               <h5 className="ms-2 mt-2 tl-item">Geotechnical Survey, Boundary Survey, Alley Dedication Waiver</h5>
               <h5 className="ms-2 mt-2 tl-item">Certificate of Completion, Fire Hydrant Flow Rate Certification</h5>
               <h5 className="ms-2 mt-2 tl-item">AMK Design Partnership</h5>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>Feb 2022</i></span></h6>
               <h5 className="ms-2 event-name tl-item">Superbowl LVI &middot; SoFi Stadium</h5>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">NFT Launch</span><span className='phase-label ms-3'><i>Summer 2022</i></span></h6>
               <h5 className="ms-2 mt-2 tl-item">NFT Launch</h5>
               <h5 className="ms-2 mt-2 tl-item">NFT Holders Start Accruing Points</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2022</i></span></h6>
               <h5 className="ms-2 event-name tl-item">Metro Crenshaw Line Opening</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Pre-Development</span><span className='phase-label ms-3'><i>2022 - 2023</i></span></h6>
               <h5 className="ms-2 mt-2 tl-item">Design, Architecture, and Engineering</h5>
               <h5 className="ms-2 mt-2 tl-item">Entitlement and Permitting</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2023</i></span></h6>
               <h5 className="ms-2 mt-2 event-name tl-item">Lucas Museum of Narrative Arts Opening</h5>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Development</span><span className='phase-label ms-3'><i>2023 -2024</i></span></h6>
               <h5 className="ms-2 mt-2 tl-item">Construction</h5>
               <h5 className="ms-2 mt-2 tl-item">Certificate of Occupancy</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2024</i></span></h6>
               <h5 className="ms-2 event-name tl-item">Clippers Intuit Dome Opening</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">DAO Launch</span></h6>
           <h5 className="ms-2 mt-2 tl-item">DAO Rental Revenue Profit Sharing</h5>
           <h5 className="ms-2 mt-2 tl-item">DAO Access + Accommodation</h5>
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Acquisition +</span><span className='phase-label ms-3'><i>2024</i></span></h6>
               <h5 className="ms-2 mt-2 tl-item">Acquisition + Development</h5>
               <h5 className="ms-2 mt-2 tl-item">DAO Profit Sharing + Access</h5>
               <span className="circle"></span>
           </div>
       </div>
       
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6><span className="badge bg-secondary mb-2">Taking Profits</span><span className='phase-label acquisition ms-3'><i>2027 - 2028</i></span></h6>
               <h5 className="ms-2 mt-2 tl-item">Liquidation of Select Properties</h5>
               <h5 className="ms-2 mt-2 tl-item">DAO Profit Sharing</h5>
               
               <span className="circle"></span>
           </div>
       </div>
       <div className="timeline-item">
           <div className="timeline-item-content">
           <h6 className="event-label"><span className="badge bg-primary mb-2">Area Events</span><span className='phase-label ms-3'><i>2028</i></span></h6>
               <h5 className="ms-2 event-name tl-item">Summer Olympics</h5>
               <h5 className="ms-2 mt-2 tl-item">Member Access</h5>
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
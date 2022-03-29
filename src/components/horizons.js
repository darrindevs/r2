import * as React from "react"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


const Horizons = () => (
  <>
  <Row id="sunnyside" className="">
  <div class="d-flex justify-content-end">
    <div className="">
      <span className="small horizon-text">Legal Descrioption</span><br></br>
      <span className="small horizon-text">___________________________</span><br></br>
      <span className="small horizon-text">Lot 165</span><br></br>
      <span className="small horizon-text">Original Sunnyside</span><br></br>
    </div>
  </div>
  </Row>
  <Row id="drawnby" className="">
  <div class="d-flex justify-content-end">
    <div className="">
      <span className="small horizon-text">___________________________</span><br></br>
      <span className="small horizon-text">Drawn by DW &nbsp;&nbsp;&nbsp; Check by BP</span><br></br>
     
    </div>
  </div>
  </Row>
  </>
  
  );
  
  export default Horizons;
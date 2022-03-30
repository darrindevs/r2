/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 
 //import Header from "./header"
 import NavDark from "./nav-dark"
 //import NavLight from "./nav-light"
 import Footer from "./footer"
 //import "./layout.css"  
 // 👆 replaced with bootstrap minified 👇
 import 'bootstrap/dist/css/bootstrap.min.css'
 // add custom css folder and file 
 import '../css/custom.css'
 import '../css/timeline.css'
 
 // styling customizarions
 import { Container } from 'react-bootstrap'
 import { Row } from 'react-bootstrap'
 import { Col } from 'react-bootstrap'
import Marginalia from "./marginalia"
import Horizons from "./horizons"
 
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       {/* remove default header 
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       */}
       
       {/* Custom Navbar */}
       {NavDark}
       {/* Custom Container */}
         <div className="container-fluid">
           <div className="container-fluid foo">
           <main>
           <Row id="row-wrapper" className="justify-content-md-center">
             <Col  id="col-1" lg={{ span: 11, offset: 0 }}>
               <Row id="row-1">
               <Col  className="col-a" lg={{ span: 2, offset: 0 }}>
               </Col>
               <Col  className="col-b mt-5" lg={{ span: 8, offset: 0 }}>
               {children}
               </Col>
               <Col  className="col-c" lg={{ span: 2, offset: 0 }}>
                </Col>
               </Row>{/* Row-1 */}
             </Col>

             

             <Col id="col-2" lg={{ span: 1, offset: 0 }}>
              <Marginalia />
             </Col>
           </Row>{/* Row-Wrapper */}
           </main>
 
 
 
 
           </div>
         </div>
         <Footer/>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 
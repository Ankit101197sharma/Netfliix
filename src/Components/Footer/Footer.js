import React from 'react'
import classes from './Footer.module.css'
import {Dropdown} from 'react-bootstrap'
 function Footer() {
    return (
        
            <div style={{position:'relative'}} className={classes.ourStoryCardFooter}>
                <div className={classes.sideFooterWrapper}>
                <div className={classes.footerDevider}></div>
                <div className={classes.siteFooter}>
                <p className={classes.footerTop}>
                    Question Call? <a href="Tel-123456789">123456789</a>
                </p>
                <ul className={classes.footerLinks}>
                    <li className={classes.footerLinksItem}>
                      <span>FAQ</span>  
                    </li>
                    <li className={classes.footerLinksItem}>
                       
                     <span>Help Center</span> 
                    </li>
                    <li className={classes.footerLinksItem}>
                        <span>Account</span>
                    </li>
                    <li className={classes.footerLinksItem}>
                      <span>Media Center</span>  
                    </li>
                    <li className={classes.footerLinksItem}>
                        <span>Invester Rrelations</span>
                    </li>
                    <li className={classes.footerLinksItem}>
                        <span>Jobs</span>
                    </li>
                    <li className={classes.footerLinksItem}>
                        <span>Ways to Watch</span>
                    </li>
                    <li className={classes.footerLinksItem}>
                        <span>Terms to use</span>
                    </li>
                </ul>

                

                </div>
                <div>
                <Dropdown style={{border:'1px solid #ccc',width:'110px',color:"#fff",margin:'auto'}}>
  <Dropdown.Toggle variant="transparent" id="dropdown-basic"><i style={{color:'#fff',textAlign:'right'}} class="fas fa-globe"></i>
    English
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#">Hindi</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                </div>
                <p style={{marginTop:'30px'}}>Netflix India</p>
                </div>
                
            </div>
       
    )
}
export default Footer;
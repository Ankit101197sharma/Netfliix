import React from 'react'
import classes from './Topbar.module.css'
import {Navbar,Container,Nav,Dropdown,Button} from 'react-bootstrap'
 function Topbar() {
    return (
        <div>
           <div><Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand style={{color:'#e50914'}} className={classes.nfBrand} href="#home">NETFLIX</Navbar.Brand>
    <Nav >
    <Dropdown style={{color:'#fff'}}>
  <Dropdown.Toggle style={{backgroundColor:'transparent',border:'1px solid #ccc'}}  ><i style={{color:'#fff',textAlign:'right'}} class="fas fa-globe"></i>
    English
  </Dropdown.Toggle>

  <Dropdown.Menu style={{width:'100px'}}>
    <Dropdown.Item  href="#">Hindi</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
  <Button style={{marginLeft:'20px'}} variant="danger">SignIN</Button> 
    </Nav>
    </Container>
  </Navbar></div>
        </div>
    )
}
export default Topbar;
import React, {useState}from 'react'
import Link from 'next/link'
import { Nav,
  Logo,
  Responsive, 
  NavItems, 
  NavItem,
  DropDown,
  Shadow, 
  IconWrapper,
  DropDownMenu
  } from './navbar.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBars, 
  faTimes,
  faShoppingCart,
  faChevronDown,
  faChevronUp
	} from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const [open, setOpen] = useState({
    sidebar:false
  });
  const [dropdown, setDropdown] = useState({
    bestSellers:false,
    kategori:false
  })

  return (
    <>
      <Nav>
        <IconWrapper mobileOnly onClick={()=>setOpen({sidebar:!open.sidebar})} open={open.sidebar}>
          <FontAwesomeIcon icon={open.sidebar?faTimes:faBars} />
        </IconWrapper>
        <Link href="/">
          <Logo>sunshop</Logo>
        </Link>
        <IconWrapper mobileOnly as='a' href='#'>  
          <FontAwesomeIcon icon={faShoppingCart} />
        </IconWrapper>
        <Shadow open={open.sidebar}/>
        <Responsive open={open.sidebar}>
          <NavItems>
            <NavItem>
              <DropDown onClick={()=>setDropdown({bestSellers:!dropdown.bestSellers})}>
                Best Sellers
                <IconWrapper smaller>
                  <FontAwesomeIcon 
                  icon={dropdown.bestSellers?faChevronUp:faChevronDown} 
                  />                
                </IconWrapper>
                
              </DropDown>
              <DropDownMenu open={dropdown.bestSellers}>
                    <p>Item</p>
                    <p>Item</p>
                    <p>Item</p>
              </DropDownMenu>
            </NavItem>
            <NavItem>
              <DropDown onClick={()=>setDropdown({kategori:!dropdown.kategori})}>
                Kategori
                <IconWrapper smaller>
                  <FontAwesomeIcon 
                  icon={dropdown.kategori?faChevronUp:faChevronDown} 
                  />                 
                </IconWrapper>                
              </DropDown>
              <DropDownMenu open={dropdown.kategori}>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                </DropDownMenu>
            </NavItem>
            <NavItem>
              <Responsive type="text" />
            </NavItem>
          </NavItems>
          <NavItems>
            <NavItem>
              <DropDown>
                <Link href="">Login</Link>
              </DropDown>
            </NavItem>
            <NavItem>
              <DropDown>
                <Link href="">Daftar</Link>
              </DropDown>
            </NavItem>
          </NavItems>
        </Responsive>
      </Nav>      
    </>
  )
}

export default Navbar

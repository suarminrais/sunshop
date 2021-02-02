import React, {useState}from 'react'
import Link from 'next/link'
import { Nav,
  Logo,
  Responsive, 
  NavItems, 
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
console.log("1 :"+open.bestSellers)
console.log("1 :"+open.kategori)

  return (
    <>
      <Nav>
        <IconWrapper mobileOnly onClick={()=>setOpen({sidebar:!open.sidebar})} open={open.sidebar}>
          <FontAwesomeIcon icon={open.sidebar?faTimes:faBars} />
        </IconWrapper>
        <Logo>sunshop</Logo>
        <IconWrapper mobileOnly as='a' href='#'>  
          <FontAwesomeIcon icon={faShoppingCart} />
        </IconWrapper>
        <Shadow open={open.sidebar}/>
        <Responsive open={open.sidebar}>
          <NavItems>
            <li>
              <DropDown onClick={()=>setDropdown({bestSellers:!dropdown.bestSellers})}>
                Best Sellers
                <IconWrapper dropDown>
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
            </li>
            <li>
              <DropDown onClick={()=>setDropdown({kategori:!dropdown.kategori})}>
                Kategori
                <IconWrapper dropDown>
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
            </li>
            <li>
              <input type="text"/>
            </li>
          </NavItems>
          <NavItems>
            <li>
              <Link href="">Login</Link>
            </li>
            <li>
              <Link href="">Daftar</Link>
            </li>
          </NavItems>
        </Responsive>
      </Nav>      
    </>
  )
}

export default Navbar

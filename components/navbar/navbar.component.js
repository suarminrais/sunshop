import React, {useState} from 'react';
import {
	NavbarContainer, 
	NavItems,
	Logo,
	Halang,
	IconContainer, 
	SidebarContainer, 
	DekstopNav,
	Button,
	SearchContainer,
	SearchInput,
} from './navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faBars, 
	faSearch,
	faSignInAlt, 
	faShoppingCart ,
	faTimes
	} from '@fortawesome/free-solid-svg-icons'


const Navbar =()=> {
	const [sidebar, setSidebar] = useState(false); 

		return (
			<header>
				<NavbarContainer>
					<NavItems >
						<IconContainer>
							<FontAwesomeIcon 
								icon={faBars}
								size="xs"
								onClick={()=>setSidebar(!sidebar)}
								/>
						</IconContainer>
						<Logo src="/logo.png" alt="logo"/>
					</NavItems>
					<NavItems right>						
							<IconContainer>
								<FontAwesomeIcon icon={faSearch} size="xs"/>
							</IconContainer>							
							<IconContainer>	
								<FontAwesomeIcon icon={	faShoppingCart } size="xs"/>
							</IconContainer>
							<IconContainer>								
								<FontAwesomeIcon icon={faSignInAlt} size="xs"/>
							</IconContainer>
					</NavItems>
				</NavbarContainer>
				
			<Halang display={sidebar ? 1: 0}/>

				<SidebarContainer display={sidebar ? 1 : 0}>
					<NavbarContainer sidebarStyle>
						<Logo src="/logo.png" alt="logo"/>
						<p>Download Aplikasinya</p>
						<Button>
							<a href="#" className="button">Install</a>
						</Button>
						<IconContainer>
							<FontAwesomeIcon 
								icon={faTimes}  
								size="xs"
								onClick={()=>setSidebar(!sidebar)}
								/>
						</IconContainer>
					</NavbarContainer>
				</SidebarContainer>	
				<DekstopNav>
					<NavItems desktop>
						<Logo src="/logo.png" alt="logo"/>
						<a href="#">Categories</a>
						<a href="#">Collections</a>
						<a href="#">Sales</a>
						<SearchContainer htmlFor="search">
							<SearchInput 
								id="search"
								type="text"
								placeholder="Search"
								/>
							<button type="submit" style={{display:"none"}}></button>
						</SearchContainer>
					</NavItems>
					<NavItems around>
						<a href="#">Login</a>
						<a href="#">Daftar</a>
					</NavItems>
				</DekstopNav>
			</header>
			
		);
}

export default Navbar;
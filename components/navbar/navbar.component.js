import React, {useState} from 'react';
import {
	NavbarContainer, 
	NavItems,
	Logo,
	Halang,
	IconContainer, 
	SidebarContainer, 
	Button
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
			</header>
			
		);
}

export default Navbar;
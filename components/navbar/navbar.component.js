import React, {useState} from 'react';
import {NavbarContainer,Halang,IconContainer, SideBar, Button} from './navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faBars, 
	faSearch,
	faSignInAlt, 
	faShoppingCart ,
	faTimes
} from '@fortawesome/free-solid-svg-icons'


const Navbar =()=> {
	const [sidebar, setSidebar] = useState({
		transform:"translateX(-1000px)",
		visibility:"hidden"
	}); 

	const handleClick =() =>{
		if(sidebar.transform==="translateX(-1000px"){
			setSidebar({
				transform:"translateX(0)",
				visibility:"visible"
			});
		}
		else
			setSidebar({transform:"translateX(-1000px",
			visibility:"hidden"})
	}

	// style={{backgroundColor:"rgba(0,0,0,.5)"}}
		return (
			<header>
				<NavbarContainer>
					<div className='left_nav'>
						<IconContainer>
							<FontAwesomeIcon icon={faBars} size="xs" onClick={()=>handleClick()}/>
						</IconContainer>
						<img src="/logo.png" alt="logo" className="logo"/>
					</div>
					<div className="right_nav">						
							<IconContainer>
								<FontAwesomeIcon className="iconFixed" icon={faSearch} size="xs"/>
							</IconContainer>							
							<IconContainer>
								<FontAwesomeIcon className="iconFixed" icon={	faShoppingCart } size="xs"/>
							</IconContainer>
							<IconContainer>								
								<FontAwesomeIcon className="iconFixed" icon={faSignInAlt} size="xs"/>
							</IconContainer>
					</div>
				</NavbarContainer>
				
				<Halang style={{visibility:sidebar.visibility}}/>

				<SideBar style={{ transform:sidebar.transform }}>
					<div className="top">
						<img src="/logo.png" alt="logo" className="logo"/>
						<p>Download Aplikasinya</p>
						<Button>
							<a href="#" className="button">Install</a>
						</Button>
						<IconContainer>
							<FontAwesomeIcon 
								className="iconFixed" 
								icon={faTimes}  
								size="xs"
								onClick={()=>handleClick()}
								/>
						</IconContainer>
					</div>
				</SideBar>	
			</header>
			
		);
}

export default Navbar;
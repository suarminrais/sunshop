import styled, {css} from 'styled-components';

const backgroundNav = "#54A8E9";

export const NavbarContainer = styled.nav`
	position: fixed;
	display:flex;
	justify-content:space-between;
	width: 100%;
	top:0;
	left:0;
	height:59px;
	align-items:center;
	z-index:10;
	background-color:${backgroundNav};
	color:white;
	font-size:14px;
	border-bottom:1px solid rgb(222, 222, 222);
	${props => props.sidebarStyle && css`
		font-size:.825rem;
		justify-content:space-around;
		`}
`
export const Logo = styled.img`
	width: 47px;
	height: 26px;
`
export const NavItems = styled.div`
	display:flex;
	align-items:center;
	justify-content:space-evenly;
	${props => props.right?	"width: 40%;" : "width: 30%;" }	
	${props => props.around && css`
			justify-content:space-around;
			width: 15%;
	`}
	${props => props.desktop?	"width: 60%;" : "" }
`

export const Halang = styled.div`
	width:100vw;
	height:100vh;
	position:fixed;
	top:0;
	left:0;
	background-color:rgba(0,0,0,.5);	
	transform:translateX(-1000px);
	transition: transform .5s ease;
	z-index:11;
	@media screen and (min-width:891px){
		display:none;
	}
	${props => props.display && css`
		transform:translateX(0);
	`
	}
`

export const IconContainer = styled.div`
	width:20px;
	cursor:pointer;	
	@media screen and (min-width:891px){
		display:none;
	}
` 

export const SidebarContainer = styled.div`
 width:90%;
 position:fixed;
 height:100vh;
 background:white;
 top:0;
 left:0;
 border-bottom:1px solid rgb(222, 222, 222);
 transform:translateX(-1000px);
 transition: transform .5s ease;
 z-index:12;
 @media screen and (min-width:891px){
		display:none;
	}
 ${props => props.display && css`
			transform:translateX(0);
			display:block;			
	`
	}
`

export const Button = styled.div`
	padding:.3rem .5rem;
	background-color:white;
	border-radius:5px;
	color:${backgroundNav};
	font-weight:bold;
	@media screen and (min-width:891px){
		display:none;
	}
`
export const DekstopNav = styled(NavbarContainer)`
	display:none;
	@media screen and (min-width:891px){
		display:flex;
	}
`
export const SearchContainer = styled.label`
	position: relative;
	border: 1px solid #c0c7d1;
	height: 40px;
	border-radius: 4px;
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index:var(--asu);
`
export const SearchInput = styled.input`
	border:none;
	background:transparent;
	height:40px;
	outline:none;
	color:white;
`
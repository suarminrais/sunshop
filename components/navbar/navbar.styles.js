import styled from 'styled-components';

const backgroundNav = "#54A8E9";
const logo = `
	width: 47px;
	height: 26px;`

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
	border-bottom:1px solid rgb(222, 222, 222);

	.logo{
		${logo};
	}

	.right_nav, .left_nav{
		display:flex;
		align-items:center;
		justify-content:space-evenly;
	
	}
	
	.right_nav{
		width:40%;
		}
		.left_nav{
			width:30%;
		}
`
export const Halang = styled.div`
	width:100vw;
	height:100vh;
	position:absolute;
	top:0;
	left:0;
	background-color:rgba(0,0,0,.5);
	transition:visibility 0s linear .2s,background-color 0s;
	z-index:11;
`

export const IconContainer = styled.div`

	width:20px;
	cursor:pointer;	
` 

export const SideBar = styled.div`
 width:90%;
 position:fixed;
 height:100vh;
 background:white;
 top:0;
 left:0;
 border-bottom:1px solid rgb(222, 222, 222);
 transition: all .5s ease;
 z-index:12;

 .top{
	height:59px;
	background-color:${backgroundNav};
	position:relative;
	display:flex;
	align-items:center;
	font-size:.825rem;
	justify-content:space-around;
	border-bottom:1px solid rgb(222, 222, 222);

	.logo{
		${logo};
	}
 }
`

export const Button = styled.div`
	padding:.3rem .5rem;
	background-color:white;
	border-radius:5px;
	color:${backgroundNav};
	font-weight:bold;
`
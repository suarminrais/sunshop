import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  position:fixed;
  display:flex;
  align-items:center;
  width:100%;
  height:55px;
  padding:0 1rem;
  background-color: #25bf3d;
  color: white;
  font-weight:bold;
  justify-content:space-between;
  z-index:3;
`
export const Logo = styled.div`
  font-weight:bold;
  text-transform:uppercase;
  cursor: pointer;
`
export const NavItems = styled.ul`
  display:flex;
  align-items:center;
  padding-left: 2rem;
  top:4rem;
  
  @media screen and (max-width:868px){
    flex-direction:column;
  }
`
export const NavItem = styled.li`
  margin:0 .5rem;

`

export const DropDown = styled.div`
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor: pointer;

 @media screen and (max-width:868px){
  width: 70vw;
  font-size: 1rem;
  margin: 1rem 0;
 }
`

export const DropDownMenu = styled.div`
  position:absolute;
  display:none;
  flex-direction:column;
  color:black;
  background-color:blue;

  @media screen and (max-width:868px){
    position: relative;
  }
  ${({open})=> open && css`
  display:flex;
  `
  }
`

export const Responsive = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  font-size:.8rem;
  z-index: 4;

  @media screen and (max-width:868px){
    position: fixed;
    flex-direction:column;
    justify-content: start;
    align-items: start;
    left: 0;
    top: 0;
    background: #25bf3d;
    width: 85%;
    height: 100%;
    opacity:0;
    transform:translateX(-1000px);  
    transition: transform .5s; 
    ${({open})=> open?"opacity:1;transform:translateX(0)":"transform:translateX(-1000px)"}
  }
`

export const IconWrapper = styled.div`
${({smaller})=>smaller?"width: 12px;":"width:22px;"}  
${({flex})=>flex?"display: flex;":""}  
  margin-left:.5rem;
  @media screen and (max-width:868px){    
    display:block;
    cursor:pointer;
    ${({open}) => open && css`
    position:absolute;
    right:5px;
    transition: all 0.5s;
    z-index: 3;
    `}
    ${({star})=> star && css`
    width: 92px;
    display:flex;
    `}
    }
  ${({mobileOnly}) => mobileOnly && css`
    display:none;
  `}
  ${({star})=> star?"width: 92px;":""}
  ${({noMargin})=> noMargin?"margin:0;":""}
`

export const Shadow = styled.div`
  position:absolute;
  top:0;
  width:100vw;
  height:100vh;
  background-color:rgba(0,0,0,0.5);
  z-index:2;
  transform:translateX(-1000px); 
  transition:all 0.5s;
  @media screen and (min-width:100px){
    display:none;
  }
  @media screen and (max-width:868px){
    ${({open})=> open?"display:block;transform:translateX(0)":"transform:translateX(-1000px)"}
  }

`
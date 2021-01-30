import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


const ItemContainer = styled.a`
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items:center;
  margin:.5rem 0;
  border-bottom:1px solid #eee;
`
const iconStyle = {
  width:"1.7rem", 
  marginRight:"1rem"
}
function SidebarItems({icon, text, more}) {

  return (
    <ItemContainer href="#" style={{}}>  
      <div style={{display:"flex"}} >
        <FontAwesomeIcon style={iconStyle} icon={icon} size="lg"/>
        <p>{text}</p>
      </div>
      {more && (<div>{">"}</div>)}
    </ItemContainer>
  )
}

export default SidebarItems

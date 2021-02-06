import styled,{css} from 'styled-components'

const appButtonWidth = "120px";
const color = "#333";
const smallFooter = `font-size: 12px;
line-height: 1.4;`;

export const FooterContainer = styled.footer`
display:flex;
flex-direction:column;
margin-bottom:0;
${smallFooter};
margin-bottom:.5rem;

@media screen and (min-width:868px){
  flex-direction:row;
}

`
export const FooterItems = styled.div`
	display:inline-grid;
	grid-template-columns:repeat(8, 1fr);
	grid-template-rows:80px 80px;
	color:${color};
	justify-items:start;
	align-items:center;
  border-top:1px solid #F5F5F5;
  ${({margin})=> margin?`margin:${margin}`:""};
  @media screen and (max-width:868px){
    grid-template-columns:repeat(8, 1fr); /*769 */
  }
  @media screen and (max-width:500px){
    grid-template-columns: repeat(5,1fr);
  }
  ${({desktop})=>desktop && css`
	grid-template-rows: repeat(7,1fr);
  grid-template-columns: 238px;
    @media screen and (max-width:868px){
      display:none;
    }
  `}

  ${({onmobile})=>onmobile && css`
  
  `}
  
	${props => props.gray && css`
		background-color:#F5F5F5;
		font-size:.6rem;
		padding:2rem 0;
		display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
	`}
`
export const FooterItem = styled.div`
${({second})=>second && "color:#2CBC42;"}
   @media screen and (min-width:868px){
     margin-left:1rem;
     font-size: 12px;
   }
`
export const CopyRight = styled.p`
  ${({mobile})=> mobile && css`
    @media screen and (min-width:868px){
      display:none;
    }
  `}
  ${({desktop})=> desktop && css`
    @media screen and (max-width:868px){
      display:none;
    }
  `}
`

export const LinkStyle = styled.div`
margin-left:1rem;
  &:hover{
    color:#2CBC42;
  ${({second})=>second && "text-decoration:underline;"}

  }
`

export const DownloadTitle = styled.h6`
  grid-row:1;
  grid-column:1/9;
  @media screen and (max-width:868px){
    grid-column: 4/6;
    font-size:1.14286rem;
  }

  @media screen and (max-width:500px){
    grid-column:2 / span 4 ;
  }
  
  @media screen and (min-width:868px){
    display:none;
  }
`
export const AppDownload = styled.a`
  grid-column: 2/4;
  grid-row:2;
	width:${appButtonWidth};
	height:40px;
	border-radius:.5rem;
	overflow:hidden;
  @media screen and (max-width:500px){
    grid-column:1/ span 2;
  }

	${props => props.right && css`
  grid-column: 6/8;
  @media screen and (max-width:500px){
    grid-column:4 / span 2;
  }
    `
  }
`


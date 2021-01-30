import styled,{css} from 'styled-components'

const appButtonWidth = "120px";
const color = "#333";
export const FooterContainer = styled.footer`
display:flex;
flex-direction:column;
`
export const FooterItem = styled.div`
  --small-font:1.54286rem;
	display:grid;
	grid-template-columns:repeat(8, 1fr);
	grid-template-rows:80px 80px;
	color:${color};
	font-size: var(--small-font);
	justify-items:center;
	align-items:center;
	border-top:1px solid #F5F5F5;
	h6{
		grid-column:3/7;
	}
	${props => props.gray && css`
		background-color:#F5F5F5;
		font-size:.6rem;
		display:flex;
		flex-direction:column;
		padding:2rem 0;
		gap:1rem;
		a{
			margin:0 .5rem;
		}
	`}
`
export const AppDownload = styled.a`
	grid-column:2/5;
	width:${appButtonWidth};
	height:40px;
	border-radius:.5rem;
	overflow:hidden;
	img{
		width:100%;
	}
	${props => props.right && "grid-column:5/8;"}
`



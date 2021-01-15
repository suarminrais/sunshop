import styled from 'styled-components';

export const NavbarContainer = styled.div`
	position: sticky;
	display:flex;
	justify-content:space-between;
	min-width: 100vw;
	top:0;
	height:72px;
	align-items:center;
	.left_nav{
		display:flex;
		align-items:center;
	}
	ul{
		display:flex;
		li{
			list-style:none;
			font-size:14px;
			line-height:1.46429;
			cursor:pointer;
			color:#141414;
			margin:0 2rem 0 2rem;
			font-weight:600;
			&:hover{
				color:blue;
			}
		}
	}
	.search{
		border:1px solid #c0c7d1;
		background:none;
		border-radius:4px;

		input{
		line-height:14px;
		padding:0 12px;
		height:40px;
		border:none;
		background:none;
		}
		button{
			outline:none;
			background:none;
			border:0;
			border-left:1px solid #eee;
			z-index:2;
			height:40px;
			cursor:pointer;
		}

	}
`
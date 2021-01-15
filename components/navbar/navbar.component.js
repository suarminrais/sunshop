import React from 'react';
import {NavbarContainer} from './navbar.styles';

const Navbar =()=> {

		return (
			<NavbarContainer >
				<div className='left_nav'>
					<ul>
						<li className='logo'><a href="">SUNSHOP</a></li>
						<li className='items'>Watch Category</li>
						<li>Apalagi</li>
					</ul>
					<div className="search">
						<input type="text"/>
						<button type='submit'>search</button>
					</div>
				</div>
				<div>
					<ul>
						<li><a href="">Daftar</a></li>

						<li><a href="">Login</a></li>
					</ul>
				</div>
			</NavbarContainer>
		);
}

export default Navbar;
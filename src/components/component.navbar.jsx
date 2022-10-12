import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { applogo } from '../utils/logos'
import Searchbar from './component.searchbar'
const Navbar = () => {
	return (
		<Stack
			direction='row'
			p={2}
			sx={{
				position: 'sticky',
				backgroundColor: '#000',
				top: 0,
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
				<img src={applogo} alt='logo' height={32} />
			</Link>
			<Searchbar />
		</Stack>
	)
}

export default Navbar

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
const Searchbar = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (searchTerm) {
			navigate(`/search/${searchTerm}`)
			setSearchTerm('')
		}
	}
	return (
		<Paper
			component='form'
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 20,
				border: '1px solid #ffd700',
				pl: 4,
				boxShadow: 'none',
				mr: { sm: 5 },
			}}>
			<input
				type='search'
				className='search-bar'
				placeholder='Search . . .'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				style={{ border: 'none', outline: 'none' }}
			/>
			<IconButton
				type='submit'
				sx={{ color: '#fff', backgroundColor: '#ffd700', p: '8px' }}>
				<Search />
			</IconButton>
		</Paper>
	)
}

export default Searchbar

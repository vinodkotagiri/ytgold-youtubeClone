import { Stack } from '@mui/material'
import React from 'react'

import { categories } from '../utils/categories'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<Stack
			direction='row'
			sx={{
				overflowY: 'auto',
				height: { sx: 'auto', md: '95%' },
				flexDirection: { md: 'column' },
			}}>
			{categories.map((category, index) => (
				<button
					onClick={() => {
						setSelectedCategory(category.name)
					}}
					className='category-btn'
					style={{
						background: category.name === selectedCategory && '#ffd700',
						color: '#fff',
					}}
					key={category.name}>
					<span
						style={{
							marginRight: '1rem',
							color: category.name === selectedCategory ? 'white' : '#ffd700',
						}}>
						{category.icon}
					</span>
					<span
						style={{
							opacity: category.name === selectedCategory ? '1' : '0.8',
						}}>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	)
}

export default Sidebar

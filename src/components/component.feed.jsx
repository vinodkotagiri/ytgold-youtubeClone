import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from './'
import axios from 'axios'
const Feed = () => {
	// -----------------------------------------------------------------------------
	// Get videos as soon as the page loads
	// -----------------------------------------------------------------------------
	const [selectedCategory, setSelectedCategory] = useState('New')
	const [videos, setVideos] = useState([])

	const getVideos = async () => {
		await axios
			.get(`/search?part=snippet&q=${selectedCategory}&maxResults=50`)
			.then((response) => setVideos(response.data.items))
			.catch((error) => console.log(error))
	}
	useEffect(() => {
		getVideos()
	}, [selectedCategory])

	return (
		<Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
			<Box
				sx={{
					height: { sx: 'auto', md: '92vh' },
					borderRight: '1px solid #3d3d3d',
					px: { sx: 0, md: 2 },
				}}>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Typography
					className='copy-right'
					variant='body2'
					sx={{ mt: 1.5, color: '#ffd700' }}>
					&copy;ytGold
				</Typography>
			</Box>
			<Box
				p={2}
				sx={{
					overFlowY: 'auto',
					height: '90vh',
					flex: 2,
					marginLeft: { md: 12 },
				}}>
				<Typography variant='h4' fontWeight={500} mb={2} sx={{ color: '#fff' }}>
					{selectedCategory} <span style={{ color: '#ffd700' }}>Videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	)
}

export default Feed

import { Typography, Box } from '@mui/material'

import React, { useEffect, useState } from 'react'
import { Videos } from './'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
	// -----------------------------------------------------------------------------
	// Get videos as soon as the page loads
	// -----------------------------------------------------------------------------

	const [videos, setVideos] = useState([])

	const { searchTerm } = useParams()

	const searchVideos = async () => {
		await axios
			.get(`/search?q=${searchTerm}&part=snippet&maxResults=50&order=date`)
			.then((response) => setVideos(response.data.items))
			.catch((error) => console.log(error))
	}
	useEffect(() => {
		searchVideos()
	}, [searchTerm])

	return (
		<Box
			p={2}
			sx={{
				overFlowY: 'auto',
				height: '90vh',
				flex: 2,
				marginLeft: { md: 12 },
			}}>
			<Typography variant='h4' fontWeight={500} mb={2} sx={{ color: '#fff' }}>
				Search results for&nbsp;
				<span
					style={{
						color: '#ffd700',
						fontWeight: 600,
					}}>{`" ${searchTerm} "`}</span>
				&nbsp;Videos
			</Typography>
			<Videos videos={videos} />
		</Box>
	)
}

export default SearchFeed

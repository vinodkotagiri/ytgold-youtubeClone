import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import {
	Navbar,
	Feed,
	VideoDetail,
	ChannelDetail,
	SearchFeed,
} from './components'

import axios from 'axios'
axios.defaults.baseURL = 'https://youtube-v31.p.rapidapi.com'
axios.defaults.headers.common = {
	'X-RapidAPI-Key': '1e0631f39amsh3642090b31b60d9p141f0cjsnfb6bd915ff3f',
	'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
}

const App = () => {
	return (
		<Box sx={{ backgroundColor: '#000' }}>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Feed />} />
				<Route path='/video/:id' element={<VideoDetail />} />
				<Route path='/channel/:id' element={<ChannelDetail />} />
				<Route path='/search/:searchTerm' element={<SearchFeed />} />
			</Routes>
		</Box>
	)
}

export default App

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Videos, ChannelCard } from './'
import { Box } from '@mui/material'
import { Stack } from '@mui/system'

const ChannelDetail = () => {
	const { id } = useParams()
	const [channelDetail, setChannelDetails] = useState(null)
	const [videos, setVideos] = useState([])

	const getChannel = async () => {
		await axios
			.get(`/channels?part=snippet&id=${id}`)
			.then((response) => setChannelDetails(response.data.items[0]))
			.catch((error) => console.log(error))

		await axios
			.get(`/search?channelId=${id}&part=snippet&order=date&maxResults=50`)
			.then((response) => setVideos(response.data.items))
			.catch((error) => console.log(error))
	}

	useEffect(() => {
		getChannel()
	}, [])

	return (
		<Box minHeight='95vh'>
			<Box>
				<div
					style={{
						background:
							'linear-gradient(90deg, rgba(255,215,0,1) 0%, rgba(247,153,0,1) 47%, rgba(255,215,0,1) 100%)',
						zIndex: 10,
						height: 250,
					}}
				/>
				{channelDetail && (
					<ChannelCard channelDetail={channelDetail} marginTop={'-120px'} />
				)}
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					maxWidth: '100%',
					justifyContent: 'center',
					marginLeft: { md: 12 },
					p: 2,
				}}>
				{videos && <Videos videos={videos} />}
			</Box>
		</Box>
	)
}

export default ChannelDetail

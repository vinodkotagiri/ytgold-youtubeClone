import { Stack, Box } from '@mui/material'

import React from 'react'
import { VideoCard, ChannelCard } from './'
const Videos = ({ videos, direction }) => {
	return (
		<Stack
			direction={direction || 'row'}
			flexWrap='wrap'
			justifyContent='start'
			gap={1}>
			{videos.map((video, index) => (
				<Box key={index}>
					{video.id.videoId && <VideoCard video={video} />}
					{video.id.channelId && <ChannelCard channelDetail={video} />}
				</Box>
			))}
		</Stack>
	)
}

export default Videos

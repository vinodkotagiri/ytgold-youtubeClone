import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Card sx={{ width: { md: 320, xs: '100%' } }}>
			<Link to={videoId ? `/video/${videoId}` : '/'}>
				<CardMedia
					image={`${snippet?.thumbnails?.high?.url}`}
					alt={snippet?.title}
					sx={{ width: 358, height: 180 }}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: '#1e1e1e', height: 106 }}>
				<Link to={videoId ? `/video/${videoId}` : '/'}>
					<Typography variant='subtitle1' fontWeight={600} color='#fff'>
						{snippet?.title.slice(0, 60)}
					</Typography>
				</Link>
				<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '/'}>
					<Typography variant='subtitle1' fontWeight={600} color='gray'>
						{snippet?.channelTitle}
						<CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	)
}

export default VideoCard

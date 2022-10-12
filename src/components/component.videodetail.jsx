import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import axios from 'axios'
import { Videos } from './'
const VideDetail = () => {
	const { id } = useParams()
	const [video, setVideo] = useState(null)
	const [relatedVideos, setRelatedVideos] = useState(null)
	const getVideo = async () => {
		await axios
			.get(`/videos?part=snippet&id=${id}`)
			.then((response) => setVideo(response.data.items[0]))
			.catch((error) => console.log(error))
	}

	const getRelatedVideos = async () => {
		await axios
			.get(`/search?part=snippet&relatedToVideoId=${id}&type=video`)
			.then((response) => setRelatedVideos(response.data.items))
			.catch((error) => console.log(error))
	}

	useEffect(() => {
		getVideo()
		getRelatedVideos()
	}, [id])

	console.log(relatedVideos)
	if (!video?.snippet) return 'Loading...'

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = video

	return (
		<Box minHeight='95vh'>
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box flex={1}>
					<Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className='react-player'
							controls
						/>
						<Typography color='#fff' variant='h5' fontWeight={600} p={2}>
							{title}
						</Typography>
						<Stack
							direction='row'
							justifyContent='space-between'
							sx={{ color: '#fff', py: 1, px: 2 }}>
							<Link to={`/channel/${channelId}`}>
								<Typography variant={{ sm: 'subtitle', md: 'h6' }} color='#fff'>
									{channelTitle}
									<CheckCircle
										sx={{ fontSize: 12, ml: '5px', color: 'gray' }}
									/>
								</Typography>
							</Link>
							<Stack direction='row' gap={3} alignItems='center'>
								<Typography variant='body1' sx={{ opacity: 0.7 }}>
									{parseInt(viewCount).toLocaleString()} views
								</Typography>
								<Typography variant='body1' sx={{ opacity: 0.7 }}>
									{parseInt(likeCount).toLocaleString()} likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
				<Box
					px={2}
					py={{ md: 1, xs: 5 }}
					justifyContent='center'
					alignItems='center'>
					{relatedVideos && (
						<Videos videos={relatedVideos} direction='column' />
					)}
				</Box>
			</Stack>
		</Box>
	)
}

export default VideDetail

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from '.'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [ videoDetail, setVideoDetail ] = useState(null);
  const { id } = useParams();

  return (
    <Box>
      
    </Box>
  )
}

export default VideoDetail
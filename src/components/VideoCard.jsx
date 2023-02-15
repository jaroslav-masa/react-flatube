import { Typography, Card, CardContent, Cardmedia } from "@mui/material"
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"

const VideoCard = ( { video:{id: {videoId}, snippet: {thumbnails , title, channelTitle}} } ) => {
  return (
    <div></div>
  )
}

export default VideoCard
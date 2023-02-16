import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import fallbackImage from "../fallback.jpg";

const ChannelCard = ({channelDetail:{id, snippet}}) => {
  const { channelId } = id;
  const { thumbnails, title, } = snippet;
  return (
    <Box sx={{height: 145*2}}>
      <Link to={`/channel/${channelId}`}>
        <Card sx={{ borderRadius: 3, position: "relative", width: 312/1.5, top: 15, margin: "auto", zIndex: 1}}>
          <CardMedia component="img" height={thumbnails?.high.height} image={thumbnails.high.url ? thumbnails.high.url : fallbackImage} draggable="false" alt={title}/>
        </Card>
        <Card sx={{background: "#252525", ":hover": {background: "#333"}, borderRadius: 3, height: 150, translate:"0 -19%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography variant="h5" component="h2" sx={{color: "white", textAlign: "center",fontWeight: "bold"}}>
            {title}
          </Typography>
        </Card>
      </Link>
    </Box>
  )
}

export default ChannelCard
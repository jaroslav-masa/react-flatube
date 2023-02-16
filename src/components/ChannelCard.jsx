import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircleRounded } from '@mui/icons-material';

import fallbackImage from "../fallback.jpg";

const ChannelCard = ({channelDetail:{id, snippet}}) => {
  const { channelId } = id;
  const { thumbnails, title, } = snippet;
  return (
    <Box display={"flex"} justifyContent={"center"} sx={{translate: "0 25%"}}>
      <Link to={`/channel/${channelId}`}>
        <Card sx={{ borderRadius: 3, background: "transparent"}}>
          <div>
            <CardMedia sx={{ position: "relative", width: 312/1.3, margin: "auto", zIndex: 1, borderRadius: 3}} component="img" height={thumbnails?.high.height} image={thumbnails.high.url ? thumbnails.high.url : fallbackImage} draggable="false" alt={title}/>     
          </div>
          <Typography variant="h6" sx={{color: "white", textAlign: "center",fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center"}}>
            {title}&nbsp;<CheckCircleRounded sx={{fontSize: 18, translate: "0 5%", color: "rgb(120,120,120)"}}/>
          </Typography>
        </Card>
      </Link>
    </Box>
  )
}

export default ChannelCard
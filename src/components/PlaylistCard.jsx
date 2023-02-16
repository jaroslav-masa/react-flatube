import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const PlaylistCard = ( { playlist: {id, snippet}} ) => {
    console.log(id, snippet);
    const { playlistId } = id;
    const { thumbnails, title, channelTitle } = snippet;
    return (
    <Card sx={{background: "#252525", ":hover": {background: "#333"}, borderRadius: 3}}>
        <Link to={`/playlist/${playlistId}`}>
          <CardMedia component="img" height={220} image={thumbnails.high.url} draggable="false" alt={title} />
          <CardContent sx={{height: 106, display: "flex", flexDirection: "column", justifyContent: "space-between", lineClamp: 2}}>
            <Typography gutterBottom variant="h6" component="h2" color="#fff">
              {title}
            </Typography>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Typography variant="body2" color="#999" component="p">
                {channelTitle}
              </Typography>
              <Typography variant="body2" color="#999" component="p" minWidth={75}>
                Playlist
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </Card>
    )
}

export default PlaylistCard
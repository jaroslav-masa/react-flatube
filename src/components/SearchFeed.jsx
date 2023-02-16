import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import { Feed, SideBar, Videos } from '.';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
              Search results for <span style={{ color: "#999"}}>{searchTerm}</span>
          </Typography>
          {videos.length > 0 && <Videos videos={[videos]} sx={{justifyContent: "center"}}/> }
      </Box>
    </Stack>
  )
}

export default SearchFeed
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SideBar, Videos } from '.';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height: {sx: "auto", md: "93vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: "#ddd"}}>
            Copyright 2023 Jaroslav Maša
          </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
              Search results for <span style={{ color: "#F31503"}}>{searchTerm}</span>
          </Typography>
          {videos.length > 0 && <Videos videos={[videos]} sx={{justifyContent: "center"}}/> }
      </Box>
    </Stack>
  )
}

export default SearchFeed
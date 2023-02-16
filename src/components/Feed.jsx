import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { fetchFromAPI } from "../utils/fetchFromAPI"
import { SideBar, Videos } from "./"

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);


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
                {selectedCategory} <span style={{ color: "#999"}}>videos</span>
            </Typography>
            {videos && <Videos videos={[videos]}/> }
        </Box>
    </Stack>   
    )
}

export default Feed
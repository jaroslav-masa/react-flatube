import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar, Feed, ChannelDetail, SearchField, VideoDetail } from "./components"

const App = () => {
    return(
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                <NavBar />
                <Routes>
                   <Route path="/" exact element={<Feed />} />
                   <Route path="/video/:id" element={<VideoDetail />} />
                   <Route path="/channel/:id" element={<ChannelDetail />} />
                   <Route path="/search/:searchTerm" element={<SearchField />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App
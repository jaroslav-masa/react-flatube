import { Stack, Box } from "@mui/system"
import { ChannelCard, PlaylistCard, VideoCard } from "./"

const Videos = ({ videos }) => {
  var videoDataArray = videos.length !== null && Object.values(videos);
  return (
    
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      
      {videoDataArray.map((videos, index) => {
          return [].concat(videos).map((item, itemIndex) => {
            return(
              <Box key={itemIndex} flex={"1 1 0"} minWidth={350} minHeight={350}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
                {item.id.playlistId && <PlaylistCard playlist={item}/>}
              </Box>
            )
         })
        })}
    </Stack>

  )
}

export default Videos
import { Stack, Box } from "@mui/system"
import { ChannelCard, VideoCard } from "./"

/*{videos.map((item, index) => (
  <Box key={index} >
      {item && <VideoCard video={item} />}
      
  </Box>
))}*/
const Videos = ({ videos }) => {
  var videoDataArray = videos.length !== null && Object.values(videos);
  //videoDataArray.at(null) && console.log(videoDataArray);
  return (
    
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      
      {videoDataArray.map((videos, index) => {
          return [].concat(videos).map((item, itemIndex) => {
            return(
              <Box key={itemIndex}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
            )
         })
        })}
    </Stack>

  )
}

export default Videos
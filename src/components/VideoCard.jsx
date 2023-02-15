import { Typography, Card, CardContent, Cardmedia, CardMedia } from "@mui/material"
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";

const VideoCard = ( { video:{id: {videoId}, snippet: {thumbnails , title, channelTitle, channelId, publishTime}} } ) => {
  const wrappedTitle =  title.length > 51 ? `${title.substring(0, 51-3)}...` : title;
  const wrappedChannelTitle =  channelTitle.length > 27 ? `${channelTitle.substring(0, 27-3)}...` : channelTitle;

  const timestamp = publishTime;
  const [timeDiff, setTimeDiff] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      var dayText, monthText, yearText;
      const date = new Date(timestamp);
      const now = new Date();
      const timeDiffSeconds = Math.floor((now - date) / 1000);
      const timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
      const timeDiffHours = Math.floor(timeDiffMinutes / 60);
      const timeDiffDays = Math.floor(timeDiffHours / 24);
      const timeDiffMonths = Math.floor(timeDiffDays / 30);
      const timeDiffYears = Math.floor(timeDiffMonths / 12);


      if(timeDiffDays > 0 && timeDiffDays <= 1 ) {
        dayText = "day";
      } else dayText = "days";
      if(timeDiffMonths > 0 && timeDiffMonths <= 1 ) {
        monthText = "month";
      } else monthText = "months";
      if(timeDiffYears > 0 && timeDiffYears <= 1 ) {
        yearText = "year";
      } else yearText = "years";


      if(timeDiffDays > 0 && timeDiffDays < 30){
        setTimeDiff(`${timeDiffDays} ${dayText} ago`);
      } 
      if(timeDiffMonths > 0 && timeDiffMonths < 12){
        setTimeDiff(`${timeDiffMonths} ${monthText} ago`);
      } 
      if (timeDiffYears > 0) {
        setTimeDiff(`${timeDiffYears} ${yearText} ago`);
      }


    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestamp]);


  return (
    <Card sx={{ width: 312, background: "#252525", ":hover": {background: "#333"}, borderRadius: 3}}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
        component="img"
        height={thumbnails.medium.height}
        image={thumbnails.medium.url}
        draggable="false"
        alt={title}
        />
        <CardContent sx={{height: 106, display: "flex", flexDirection: "column", justifyContent: "space-between", lineClamp: 2}}>
          <Typography gutterBottom variant="h6" component="h2" color="#fff">
            {wrappedTitle}
          </Typography>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="body2" color="#999" component="p">
              {wrappedChannelTitle}
            </Typography>
            <Typography variant="body2" color="#999" component="p" minWidth={75}>
              {timeDiff}
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard
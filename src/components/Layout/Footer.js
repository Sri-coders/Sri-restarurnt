import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box} from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 3 }}>
      <Box sx={{ "& svg": { fontSize: "60px",cursor: "pointer",  mr: 2,}, "& svg:hover": {color: "orangered",transform: "translateX(5px)",transform: "translateX(5px)",},}}>
                 
 {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box> 
         <p style={{fontSize:"30px"}}>All Rights Reserved &copy; Sri Restaurant</p>  
      </Box>
    </>
  );
};

export default Footer;

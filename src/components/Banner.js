import { Box, Link, Popover, Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "./style/banner";
import { useState } from "react";

export default function Banner() {
    const [isHover1, setIsHover1] = useState(false);

    const handleMouseEnter1 = () => {
      setIsHover1(true);
    };
    const handleMouseLeave1 = () => {
        setIsHover1(false);
    };

    const open = isHover1; 
    const id = open ? "simple-popover" : undefined; 
  


    return (
        <BannerContainer>
            <BannerImage 
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                src = {isHover1 ? "/images/banner/cute animal color.png" 
                                : "/images/banner/cute animal.png"} 
                
            /> 
            <Popover 
                    sx={{ 
                        pointerEvents: "none", 
                    }} 
                    open={open} 
                    anchorEl={isHover1} 
                    anchorOrigin={{ 
                        vertical: "bottom", 
                        horizontal: "center", 
                    }} 
                    transformOrigin={{ 
                        vertical: "top", 
                        horizontal: "right", 
                    }} 
                    onClose={handleMouseEnter1} 
                    disableRestoreFocus 
                > 
                    <Box sx={{ backgroundColor: '#847577', color: '#FFF4E4' }}> 
                        <Typography sx={{ p: 6, 
                        fontFamily: 'Grandiflora One' ,
                        fontWeight: '700'}}> 
                            Come over and I make you delicious clay pot crispy rice! 
                        </Typography> 
                    </Box> 
                </Popover> 

            
            <BannerContent>
                <Typography variant="h6"></Typography>
                <BannerTitle variant="h2">I'm Luna</BannerTitle>
                <Link href="https://open.spotify.com/blend/taste-match/de34bb496f5c07d1?si=kd8L4rgtRR-yjPjFMa8ZWA&fallback=getapp&blendDecoration=5f9c38d2">
                    <BannerDescription variant="subtitle">
                        
                        ౨ৎ join my blend hehe 
                    </BannerDescription>
                </Link>
                <Link href="https://www.instagram.com/ln.ate.that/">
                    <BannerDescription variant="subtitle">
                        
                        ౨ৎ food blog type beat 
                    </BannerDescription>
                </Link>
                <BannerDescription variant="subtitle">
                        
                    ౨ৎ sophomore newbie !
                </BannerDescription>
            </BannerContent>
            
        </BannerContainer>
        
        
    );
}
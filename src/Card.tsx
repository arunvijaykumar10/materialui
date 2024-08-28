import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Button, Chip,Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import { Height } from '@mui/icons-material';

interface CardProps{
    image:string;
    title:string;
    duration:any;
    participants:any;
    price:any;
}
function MyCard({ image, title, duration, participants, price  }:CardProps) {
    return (
        <Card >
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                sx={{borderRadius:"9px",width:"35.4ch", ml:"2ch", marginTop:"2ch"} }
            />
            <Box padding={1} justifyContent="flex-end">
                <Chip  icon={<AccessTimeIcon />} label={duration} />
                <Chip icon={<GroupIcon />} label={participants} />
            </Box>
            <CardContent>
                
                <Box>
                <Typography>
                    {title}
                </Typography>
                </Box>
                <Box flexDirection='column' display="flex" marginTop="flex">
                <Typography >
                    {price}
                </Typography>
                </Box>
                
                <Box display="flex" justifyContent="flex-end" margin-top={2}>
                <Button variant="contained" sx={{ backgroundColor: 'text.secondary',}}>
                    Join
                </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default MyCard;

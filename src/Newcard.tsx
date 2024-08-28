import React from 'react';
import { Card, Typography, Grid, Avatar, Divider, CardMedia, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';

interface MyCardProps {
    onCreateIconClick: () => void;
}
function MyCard({ onCreateIconClick }: MyCardProps) {
    return (
        <Grid container xs={12} sm={4} md={4}>
            <Card sx={{ width: '400px' }}>
                <Grid display="flex" justifyContent="space-between" alignItems="center" padding={2}>
                    <Typography>Customer info</Typography>
                    <CreateIcon onClick={onCreateIconClick} style={{ cursor: 'pointer' }} />
                </Grid>
                <Grid display="flex" alignItems="center" padding={2}>
                    <Avatar src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp" />
                    <Grid marginLeft={2} display="flex" flexDirection="column">
                        <Typography>Arun Kumar</Typography>
                        <Typography color="text.secondary">vjvkarun@gmail.com</Typography>
                        <Typography color="text.secondary">IP address: 123.323.2.323</Typography>
                        <Grid display="flex" alignItems="center" marginTop={2}>
                            <Button color="error" justify-content="spacing"> <AddIcon /> Add to Blacklist</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider sx={{ marginY: 2 }} />
                <Grid display="flex" justifyContent="space-between" alignItems="center" padding={2}>
                    <Typography>Delivery</Typography>
                    <CreateIcon onClick={onCreateIconClick} style={{ cursor: 'pointer' }} />
                </Grid>
                <Grid display="flex" flexDirection="column" gap={1} marginLeft={2.5}>
                    <Grid display="flex" alignItems="center">
                        <Typography variant="body2" color="text.secondary" sx={{ width: 100, fontWeight: 'bold' }}>Ship by</Typography>
                        <Typography variant="body1" marginLeft={2}> DHL</Typography>
                    </Grid>
                    <Grid display="flex" alignItems="center">
                        <Typography variant="body2" color="text.secondary" sx={{ width: 100, fontWeight: 'bold' }}>Speedy</Typography>
                        <Typography variant="body1" marginLeft={2}>Standard</Typography>
                    </Grid>
                    <Grid display="flex" alignItems="center">
                        <Typography variant="body2" color="text.secondary" sx={{ width: 100, fontWeight: 'bold' }}>Tracking No.</Typography>
                        <Typography variant="body1" marginLeft={2} sx={{ textDecoration: 'underline' }}>SPX678987654322</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ marginY: 2 }} />
                <Grid display="flex" justifyContent="space-between" alignItems="center" padding={2}>
                    <Typography>Shipping</Typography>
                    <CreateIcon onClick={onCreateIconClick} style={{ cursor: 'pointer' }} />
                </Grid>
                <Grid display="flex" flexDirection="column" gap={1} marginLeft={2.5}>
                    <Grid display="flex" alignItems="center">
                        <Typography variant="body2" color="text.secondary" sx={{ width: 100, fontWeight: 'bold' }}> Address</Typography>
                        <Typography variant="body1" marginLeft={4}> 1212 verna unions Apt.164-Honolulu,RI/3546</Typography>
                    </Grid>
                    <Grid display="flex" alignItems="center">
                        <Typography variant="body2" color="text.secondary" sx={{ width: 100, fontWeight: 'bold' }}>Phone number</Typography>
                        <Typography variant="body1" marginLeft={2}>89-98-34-43-43</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ marginY: 2 }} />
                <Grid display="flex" justifyContent="space-between" alignItems="center" padding={2}>
                    <Typography>Payment</Typography>
                    <CreateIcon onClick={onCreateIconClick} style={{ cursor: 'pointer' }} />
                </Grid>
                <Grid display="flex" alignItems="center" padding={2} marginLeft={20}>
                    <Typography variant="body1" sx={{ marginRight: 2 }}>**** **** **** 55678</Typography>
                    <CardMedia
                        component="img"
                        height="40"
                        sx={{ width: "50px" }}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoh1aeKI7KkatXLLN0TA-5LDe2ON49TMRkFXAQn1E2pUElr_dVzSJfKaAN7i-flWJBJYQ&usqp=CAU"
                        alt="Payment method"
                    />
                </Grid>
            </Card>
        </Grid>
    );
}

export default MyCard;

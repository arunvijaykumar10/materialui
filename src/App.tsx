import React from 'react';
import { Grid } from '@mui/material';
import MyCard from './Card'; 

function App() {
  const cardData = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1679177183775-75c2e0d0d209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Introduction to Python Programming',
      duration: '1h 40m',
      participants: '497',
      price: '$83.74/year',
    },
    {
      image: 'https://images.unsplash.com/photo-1621570168077-befe8b7eab56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Digital Marketting Fundamentals',
      duration: '2h 30m',
      participants: '342',
      price: '$97.14/year', 
    },
    {
      image: 'https://images.unsplash.com/photo-1621569898825-ef12e7592f94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
      title: 'Data Science with R Software',
      duration: '1h 40m',
      participants: '684',
      price: '$68.71/year',
    }
  ];

  return (
    <Grid container spacing={2} marginTop={2}  >
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={4} md={4} key={index}>
          <MyCard
            image={card.image}
            title={card.title}
            duration={card.duration}
            participants={card.participants}
            price={card.price}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;

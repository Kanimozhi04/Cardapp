import React from 'react';
import './App.css';
import {Card,CardMedia,CardContent,Typography,Button,CardActions,IconButton}from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function App() {
  return (
    <div className="App">
       <Card sx={{ maxWidth: 245 ,p:6,pl:20}}>
         <CardMedia
            component="img"
             height="300"
             image="Person.png"
            alt="person"
          />
          <CardContent className="content">
             <Typography gutterBottom variant="h5" component="div">Laura Smith</Typography>
             <Typography gutterBottom  component="div">Frontend Developer</Typography>
             <Button variant="outlined" fullWidth startIcon={<EmailIcon />} >Email</Button>
             
             <Typography gutterBottom  component="div">Interests</Typography>
             <Typography variant="body2" color="text.secondary">
                Painting,Reading Books
              </Typography>
              <CardActions >
                <IconButton aria-label="twitter">
                   <TwitterIcon sx={{pr:2}} />
                   <FacebookIcon sx={{pr:2}} />
                   <InstagramIcon sx={{pr:2}} />
                   <LinkedInIcon  sx={{pr:2}}/>
                </IconButton>
              </CardActions>

          </CardContent>
        </Card>
     
    </div>
  );
}

export default App;

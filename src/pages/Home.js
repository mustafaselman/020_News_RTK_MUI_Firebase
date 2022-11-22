
import Navbar from '../components/Navbar'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PostsList from '../posts/PostList';

export default function Home () {


  return (
    <>
    <Navbar/>
    <PostsList/>
    
    </>
  );
}


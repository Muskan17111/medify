import React from 'react';
import { Box, Container, Grid} from "@mui/material";
import blog from '../../assests/blog.svg';
import blognews from '../../assests/blognew.svg';

function BlogNews() {
  return (
    <Box py={6}>
      <Container>
      <Box
        component={'img'}
        src={blognews}
        width={{ xs: 1, md: "50%" }}/>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <img src={blog} alt="Blog 1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={blog} alt="Blog 2" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={blog} alt="Blog 3" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogNews;

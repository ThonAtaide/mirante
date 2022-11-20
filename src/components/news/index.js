import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';
import Post from './post';
import { Stack } from '@mui/material';
import { posts as feed } from '../../utils/mocked-data';

const NewsPage = () => {

    const [posts, setPosts] = useState(null);
    
    useEffect(() => {
      setPosts(feed)
        // fetch('http://localhost:5000/posts')
        // .then(response => response.json())
        // .then(data => setPosts(data))
        // .catch(err => setPosts())  
    }, []);

    return(
      <Container maxWidth="sm" sx={{ mt: '2em' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: '2em'}}>
          <Link underline="hover" color="inherit" href="/">
            <Typography color="text.primary">Notícias</Typography>              
          </Link>
        </Breadcrumbs>
        <Stack  spacing={4}>
          
          {posts && posts.map(post =>{               
            console.log(post)
            return <Post 
                {...post}
                key={post.id}
            />}
          )}
        </Stack>            
      </Container>
    );
}

export default NewsPage;
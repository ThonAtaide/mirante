import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';
import Post from './post';
import { Box, Grid, Stack } from '@mui/material';

const NewsPage = () => {

    const [posts, setPosts] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:5000/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(err => console.log(`Erro ao charmar posts: ${err}`))        
    }, []);

    return(
      <Container maxWidth="sm" sx={{ mt: '2em' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: '2em'}}>
        <Link underline="hover" color="inherit" href="/">
            Notícias
        </Link>
        <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
        <Stack spacing={4}>
          {posts && posts.map(post =>               
            <Post 
                {...post}
                key={post.id}
            />
          )}
        </Stack>            
      </Container>
    );
}

export default NewsPage;
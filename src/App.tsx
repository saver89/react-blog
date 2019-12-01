import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Person from './components/Person';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




export default function App() {
  const [posts, setPost] = useState([
    {id: 1, title: "POST1"},
    {id: 2, title: "POST2"},
    {id: 3, title: "POST3"}
  ]);

  let detelePostHandler = (postIndex: number) => {
    const dposts = [...posts];
    dposts.splice(postIndex, 1);
    setPost(dposts);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>
        {posts.map((post, index) => (<Person click={() => detelePostHandler(index)} key={post.id} id={post.id} title={post.title}/>))}
        <Copyright />
      </Box>
    </Container>
  );
}
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Post from './components/Post';

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
    { id: 1, title: "POST1" },
    { id: 2, title: "POST2" },
    { id: 3, title: "POST3" }
  ]);
  
  const [showPosts, setShowPosts] = useState(false);

  let buttonStyle = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let detelePostHandler = (postIndex: number) => {
    const tempPost = [...posts];
    tempPost.splice(postIndex, 1);
    setPost(tempPost);
  };

  let postEditedHandler = (event: any, id: any) => {
    const postIndex = posts.findIndex(post => post.id === id);
    const post = {...posts[postIndex]};
    post.title = event.target.value;
    const tempPosts = [...posts];
    tempPosts[postIndex] = post;

    setPost(tempPosts);
  };
  
  let toggleShowPostsHandler = (event: any) => {
    setShowPosts(!showPosts);
  };

  let displayPosts = null;
  if (showPosts) {
    displayPosts = (
      <div>
        {posts.map((post, index) => {
          return <Post
            changed={(event: any) => postEditedHandler(event, post.id)}
            click={() => detelePostHandler(index)}
            key={post.id}
            id={post.id}
            title={post.title} />;
        })}
      </div>
    );

    buttonStyle.backgroundColor = "red";
  }

  let classes = [];
  if (posts.length <= 2) {
    classes.push("red");
  }
  if (posts.length <= 1) {
    classes.push("bold");
  }
  let classNames = classes.join(' ');

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>
        <p className={classNames}>Test text for dynamic styles</p>
        <button style={buttonStyle} onClick={(event) => toggleShowPostsHandler(event)}>Показать посты</button>
        {displayPosts}
        <Copyright />
      </Box>
    </Container>
  );
}
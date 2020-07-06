import React from 'react';
import './style.css';
import Card from '../../components2/UI/Card';
import BlogPost from '../../components2/BlogPost';
import Sidebar from '../../components2/Sidebar';
import Layout from '../../components2/Layout';

/**
* @author
* @function Post
**/

const Post = (props) => {

    console.log(props);


  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default Post;
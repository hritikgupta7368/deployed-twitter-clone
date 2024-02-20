"use client"

import PostStructure from "./postStructure";
import { useEffect ,useState } from "react";


const PostsType = ({
  type,
  

}) => {
    const [posts, setPosts] = useState([]);
    
    function getRandomItems(arr1, arr2, size) {
     
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    
     
      shuffleArray(arr1);
      shuffleArray(arr2);
    
      
      const randomArr1 = arr1.slice(0, size);
      const randomArr2 = arr2.slice(0, size);
    
      return [randomArr1, randomArr2];
    }

    function queryGenerator(type){
      try{
        if(!type){
          throw new Error("type must be defined");
        }
        let query = {}
        // switch(type){
        //   case "For You" :
        //     {
        //       return (
        //         // random posts
        //       )
        //     }
        //     case "Following" :
        //     {
        //       return (
        //       //  posts from followers
        //       )
        //     }
        //     case "Trending" :
        //     {
        //       return (
        //         // hashtag table with top highest posts
        //       )
        //     }
            
        //     case "Sports" :
        //     {
        //       return (
        //         // posts which have a sports tag mentioned
        //       )
        //     }
        //     case "Entertainment" :
        //       {
        //         return (
        //           // posts which have a entertainment tag mentioned
        //         )
        //       }
             
        //   default : {

        //   }
      }
    
      catch(e){
        console.log("query generation failed")
        return
    }
  }

   

    const fetchPosts = async() => {
        try {
            const response = await fetch('/api/getposts')
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
              }
              const data = await response.json();
              setPosts(data.posts);
        }
        catch(err){
            console.error(err)
        }

    }

    const fetchMediaUrls = async (post) => {
        const mediaUrls = await Promise.all(post.media.map(async (fileName) => {
          const response = await fetch(`/api/media-url?fileName=${fileName}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch URL for ${fileName}`);
          }
          return response.json();
        }));
        return mediaUrls;
      };


      const renderPostMedia = async (post) => {
        const mediaUrls = await fetchMediaUrls(post);
        // Update the post object with media URLs
        const updatedPost = { ...post, mediaUrls };
        // Find index of the post in the array and update it
        const updatedPosts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
        setPosts(updatedPosts);
      };
    

    useEffect(() => {
        fetchPosts();
      }, []);

  return (
    posts.map((post, index) => {

        let userinfo = post.user
        // let media =   post.test
        let linkpost = `/${userinfo.userId}/status/${post.id}`;
        let linkuser = `/${userinfo.userId}`;
        const media= []
        const mediasrc = []
        const res =[]
        return (
          <PostStructure
          key={post.id}
          comments = {post.commentsCount}
          reposts = {post.repostsCount}
          likes = {post.likesCount}
          views = {"4.6M"}
          date = {post.createdAt}
          username = {userinfo.name}
          userId = {userinfo.userId}
          content={post.content}
          userlogo={userinfo.image}
          index = {index}
          media = {res[0]}
          mediaSrc = {res[1]}
          />
        );
      })
  )
}

export default PostsType

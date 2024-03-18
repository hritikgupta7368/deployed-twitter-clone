"use client";
import Loading from "@/app/(routes)/[userid]/loading";
import PostStructure from "./postStructure";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { VariableSizeList } from "react-window";

const PostsType = ({ type }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchNewPosts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
   
      const response = await fetch(`/api/getposts?page=${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      if (data.posts.length === 0) {
        setHasMore(false);
      }
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect( () =>{
    async function fetchStartingPosts(){
      try{
        const response = await fetch(`/api/getposts?page=${page}`);
        const data = await response.json();
        setPosts(data.posts)
      }
      catch(error){
        console.log(error);
      }
    }
    setTimeout(() => {
      fetchStartingPosts()
    },2000)
   
   
  },[])

  const getItemSize = (index) => {
    // Replace this with your own logic to calculate post height based on content
    return 400; // Placeholder value for demonstration
  };

  const Post = ({ index, style }) => {
    const post = posts[index];
    return (
      <div style={style}>
        <PostStructure
          key={index}
          comments={post.commentsCount}
          reposts={post.repostsCount}
          likes={post.likesCount}
          views="4.6M"
          date={post.createdAt}
          username={post.user.name}
          userId={post.user.userId}
          content={post.content}
          userlogo={post.user.image}
          index={index}
          media={["1.jpg", "2.jpg", "3.jpg"]}
          mediaSrc={post.images}
        />
      </div>
    );
  };

  return (
    <InfiniteScroll
      dataLength={posts?.length ? posts.length : 0}
      next={fetchNewPosts}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
       <VariableSizeList
        height={500} // Total height of the visible area for the list
        itemCount={posts.length} // Total number of items in the list
        itemSize={getItemSize} // Function to determine the height of each item
        width={"100%"} // Total width of the visible area for the list
      >
        {Post}
      </VariableSizeList>
      
    </InfiniteScroll>
  );
};

export default PostsType;

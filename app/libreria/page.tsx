import React from 'react';
import { draftMode } from "next/headers";
import MoreStories from "../../components/service/service";
import { getAllPosts, getAllPostsREST } from "@/lib/api";

const AboutPage: React.FC = async () => {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled, 'book');
  const allPostsREST = await getAllPostsREST(isEnabled, 'book');

  console.log("ALL POSTS", JSON.stringify(allPosts))
  console.log("ALL POSTS REST", JSON.stringify(allPostsREST))  

  const morePosts = allPosts;

  return (
    <>
      <MoreStories posts={morePosts} serviceType='libreria' />
    </>
  );
};

export default AboutPage;
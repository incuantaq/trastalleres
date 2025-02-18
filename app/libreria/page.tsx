import React from 'react';
import { draftMode } from "next/headers";
import MoreStories from "../../components/service/service";
import { getAllPosts } from "@/lib/api";

const AboutPage: React.FC = async () => {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled, 'book');

  const morePosts = allPosts;


  return (
    <>
      <MoreStories posts={morePosts} serviceType='libreria' />
    </>
  );
};

export default AboutPage;
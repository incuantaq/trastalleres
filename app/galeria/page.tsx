import React from 'react';
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import MoreStories from "../../components/service/service";

const AboutPage: React.FC = async () => {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled, 'pintura');

  return (
    <>
      <MoreStories posts={allPosts} serviceType='galeria' />
    </>
  );
};

export default AboutPage;